import React from 'react';
import Paper from 'material-ui/Paper';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from 'material-ui/CircularProgress';
import {Link} from 'react-router';

const styles = {
  rootClient: {
    overflow: 'auto',
    height: 500,
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  loadingCircle: {
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 'auto',
    margin: 10
  },
  status: {
    color: '#999999',
  },
};

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: this.initList(props.data),
      loading: false,
      index: 6
    };
  }


  loadMore = (event) => {
    let index = this.state.index;
    if (index === (this.props.data.length)) return;
    let element = document.getElementById('rootClient');   
    
    let listDataScroll = this.state.listData;
    
    if (element.scrollHeight - parseInt(element.scrollTop) === element.clientHeight) {
    
      listDataScroll.push(this.props.data[index])
      this.setState({
        loading: true,
        listData: listDataScroll,
        index: index + 1
      })
    }
  }
  initList(array) {
    let list = []
    for (let i = 0; i < 6; i++) {
      const element = array[i];
      list.push(element)
    }
    return list;
  }
  render() {
    const loader = <div className="loader">Loading ...</div>;

    let items = [];
    this.state.listData.map((item, i) => {
      items.push(
        <Link to={`/form/inbox/${item.id}`}>
          <div className="row" key={i}>
            <div className="col-xs-4">
              <img style={styles.image} src={`../../images/${item.image}`} />
            </div>
            <div className="col-xs-8">
              <p>{item.phone}</p>
              <p style={styles.status}>
                {(() => {
                  switch (item.status) {
                    case 0: return "Chưa xử lý ???";
                    case 1: return "Đang xử lý ...";
                    case 2: return "Đã xử lý !!!";
                    default: return "Chưa xử lý ???";
                  }
                })()}
              </p>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <div id='rootClient' style={styles.rootClient} onScroll={this.loadMore}>
        {items}
        {this.state.loading ? <div style={styles.loadingCircle}> <CircularProgress size={60} thickness={7} /> </div> : null}
      </div>
    );
  }
}


export default Clients;