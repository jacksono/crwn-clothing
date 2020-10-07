import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.componenet";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsFetching,
  selectCollectionsIsLoaded
} from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

    // this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({
    //     loading: false
    //   });
    // });
  }

  render() {
    const { match, isFetching, collectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner {...props} isLoading={isFetching} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              {...props}
              isLoading={!collectionsLoaded}
            />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  collectionsLoaded: selectCollectionsIsLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
