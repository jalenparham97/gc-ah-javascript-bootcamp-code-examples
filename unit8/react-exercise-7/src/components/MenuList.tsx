import { menuItems } from '../data/menu-items';
import MenuItem from './MenuItem';

export default function MenuList() {
  return (
    <div>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
