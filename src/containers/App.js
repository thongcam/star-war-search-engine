import React from "react";
import { connect } from "react-redux";
import {
  updateURL,
  updateFilterArr,
  updateFinalList,
  updateSearchField,
  updateShowModal,
  concatMaster,
} from "../store/actions/index";
import "../style/App.css";
import ModalCard from "../components/Modal";
import FilterContainer from "./FilterContainer";
import SearchBox from "../components/SearchBox";
import CardList from "./CardList";
import Scroll from "../components/Scroll";
import ScrollUpButton from "react-scroll-up-button";
import masterTemplate from "./masterTemplate";
import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class App extends React.Component {
  constructor() {
    super();
    this.asyncOp = this.asyncOp.bind(this);
  }

  updateFilter = async (arr) => {
    await this.props.updateFilterArr(arr);
    await this.updateFinal();
  };

  updateSearch = async (event) => {
    await this.props.updateSearchField(event);
    await this.updateFinal();
  };

  updateFinal = () => {
    this.props.updateFinalList();
  };

  initializeModal = async (url) => {
    await this.props.updateURL(url);
    if (!this.props.showModal) {
      await this.props.updateShowModal(true);
    }
  };

  close = async (event) => {
    await this.props.updateShowModal(false);
  };

  alert = () => {
    alert(
      "An app that helps you search for any Star Wars stuff through the SWAPI."
    );
  };

  asyncOp = async (category, i, array, obj) => {
    const response = await fetch(
      "https://swapi.dev/api/" + category + "/?page=" + i
    );
    const objRes = await response.json();
    if (objRes.next === null) {
      array = await array.concat(objRes.results);
      obj.assocArray = array;
      this.props.concatMaster(obj);
      return true;
    } else {
      i += 1;
      array = await array.concat(objRes.results);
      await this.asyncOp(category, i, array, obj);
    }
  };

  componentDidMount() {
    masterTemplate.forEach(async function (obj) {
      await this.asyncOp(obj.type, 1, [], obj);
    }, this);
  }

  render() {
    const content =
      this.props.master.length === 6 ? (
        <div>
          <FilterContainer
            updateFilter={this.updateFilter}
            data={this.props.master}
          />
          <Scroll className="bt b--white bw2">
            <CardList
              finalList={this.props.finalList}
              initializeModal={this.initializeModal}
              data={this.props.master}
            />
          </Scroll>
          <ModalCard
            show={this.props.showModal}
            url={this.props.url}
            close={this.close}
            other={this.initializeModal}
            master={this.props.master}
          />
        </div>
      ) : (
        <div className="sweet-loading tc mt4" style={{ height: "55vh" }}>
          <ScaleLoader
            css={override}
            height={50}
            width={15}
            radius={10}
            sizeUnit={"px"}
            color={"#FFF"}
          />
          <h2 className="mt2 white">LOADING...</h2>
        </div>
      );
    return (
      <div
        style={{
          height: "auto",
          backgroundImage:
            "url(https://steamuserimages-a.akamaihd.net/ugc/916912476088733298/A9222CAD7EAE0A34395B21322CE4742610E9B422/)",
          backgroundPosition: "absolute",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-column items-center">
          <h1
            style={{ fontFamily: "'Press Start 2P', cursive", color: "yellow" }}
          >
            STAR WARS SEARCH ENGINE
          </h1>
          <SearchBox updateSearch={this.updateSearch} />
          <h2 className="f2 self-start ph4 white underline">Filters:</h2>
          {content}
        </div>
        <div>
          <ScrollUpButton style={{ margin: " 4vh 3vw" }} className="grow" />
        </div>
        <div className="bg-dark-gray footer">
          <div className="col">
            <img src={require("../GitHub-Mark-32px.png")} alt="" />
            <a
              href="https://github.com/thongcam/star-war-search-engine"
              className="link underline-hover white f5 ml2"
            >
              View on GitHub
            </a>
            <div
              onClick={this.alert}
              className="link underline-hover white f5 ml4"
              style={{ cursor: "pointer" }}
            >
              About this app
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filtersArr: state.app.filtersArr,
    searchField: state.app.searchField,
    finalList: state.app.finalList,
    showModal: state.app.showModal,
    url: state.app.url,
    master: state.app.master,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateURL: (url) => dispatch(updateURL(url)),
    updateFilterArr: (arr) => dispatch(updateFilterArr(arr)),
    updateFinalList: () => dispatch(updateFinalList()),
    updateSearchField: (event) => dispatch(updateSearchField(event)),
    updateShowModal: (bool) => dispatch(updateShowModal(bool)),
    concatMaster: (obj) => dispatch(concatMaster(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
