import Region from "./Region";
import RegionAdapter from "./RegionAdapter"
import RegionBehavior from "./RegionBehavior";
import RegionRegistry from "./RegionRegistry";
import ViewRegistry from "./ViewRegistry";

import adapters from "./adapters";
import behaviors from "./behaviors";
import regions from "./regions";

import asRegionAdapter from "./utils/asRegionAdapter";

import RegionManager from "./components/RegionManager";

import ContentControl from "./components/hosts/ContentControl";
import ItemsControl from "./components/hosts/ItemsControl";
import ListItemsControl from "./components/hosts/ListItemsControl";

export {
    Region,
    RegionAdapter,
    RegionBehavior,
    RegionRegistry,
    ViewRegistry,

    adapters,
    behaviors,
    regions,

    asRegionAdapter,

    RegionManager,

    ContentControl,
    ItemsControl,
    ListItemsControl
};

