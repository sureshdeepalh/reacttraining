import React, { Component } from "react";
import { connect } from "react-redux";
import AlbumCard from "../components/UI/AlbumCard";
import { getAlbumList } from "../store/action";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log(id);
    this.props.history.push(`/album/${id}`);
  }
  componentDidMount() {
    this.props.handleGetAlbumList();
  }

  render() {
    const random_hex_color_code = () => {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return n.slice(0, 6);
    };

    let content = null;

    content = this.props.loading && <h1>Loading</h1>;
    content = this.props.albumList.map((al, i) => {
      return (
        <AlbumCard
          key={i}
          handleClick={this.handleClick}
          id={al.id}
          title={al.title}
          image={`https://via.placeholder.com/600/${random_hex_color_code()}`}
        />
      );
    });
    return <div className="Home">{content}</div>;
  }
}

const mapStateToProps = ({ album }) => ({
  albumList: album.albumList,
  loading: album.loading,
});
const mapDispatchToProps = (dispatch) => ({
  handleGetAlbumList: () => dispatch(getAlbumList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
