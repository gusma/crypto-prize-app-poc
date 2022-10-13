import { AssetTable } from '../../components';
import { UseAssetList } from '../../hooks';

const Home = () => {
  const { assetList, getAssetList, loader } = UseAssetList();
  if (loader) {
    return <>Loading...</>;
  }
  return (
    <>
      <AssetTable data={assetList} />
    </>
  );
};

export default Home;
