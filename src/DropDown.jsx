import React, { useState } from "react";
import styles from "./DropDown.module.css"; // Import your CSS module

export default function DropDown({ items }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (item) => {
    // Handle the option click here
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  return (
   <>
   <h1>Is this a React Project ?</h1>
   <div className={styles.dropdown} >
      <button
        className={styles.dropdownButton}
        onClick={handleDropdownClick}
        onMouseEnter={() => setDropdownOpen(true)}
      >
        Hover Me
      </button>
      {isDropdownOpen && (
        <ul className={styles.dropdownList} >
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(item)}
              className={styles.dropdownItem}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {selectedItem && (
        <div className={styles.selectedItem}>
          Selected: {selectedItem}
        </div>
      )}
    </div>
   </>
  );
}
