import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsPreview from "../collections-preview/collections-preview.component";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...previewProps }) => (
        <CollectionsPreview key={id} {...previewProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
