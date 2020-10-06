import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.componenet";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false
      });
    });
    // this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({
    //     loading: false
    //   });
    // });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner {...props} isLoading={loading} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner {...props} isLoading={loading} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
