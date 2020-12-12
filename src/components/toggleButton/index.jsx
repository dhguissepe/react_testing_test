import { useState } from 'react';
export default function ToggleButton() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div>
      <label htmlFor='toggle'>Show Message</label>
      <input
        id='toggle'
        type='checkbox'
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? 'Active' : 'Inactive'}
    </div>
  );
}
