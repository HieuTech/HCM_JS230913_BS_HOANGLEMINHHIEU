import React from 'react'
import 
export default function Modal(props) {
    const {isOpen, onClose,children} = props;
    if (!isOpen) return null;

    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    );
}
