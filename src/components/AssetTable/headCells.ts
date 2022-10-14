import { DataTypes } from './data';

interface HeadCell {
  disablePadding: boolean;
  id: keyof DataTypes;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Asset',
  },
  {
    id: 'market_cap',
    numeric: true,
    disablePadding: false,
    label: 'Market Cap',
  },
  {
    id: 'market_cap_change_24h',
    numeric: true,
    disablePadding: false,
    label: 'Market Cap 24h',
  },
];

export default headCells;
