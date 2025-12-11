const ColorChoice = ( {setColorCallback} ) => {
  const colors = [
    { className: 'color-red', color: '#ff0000' },
    { className: 'color-orange', color: '#ff7f00' },
    { className: 'color-yellow', color: '#ffff00' },
    { className: 'color-green', color: '#00ff00' },
    { className: 'color-blue', color: '#0000ff' },
    { className: 'color-indigo', color: '#4b0082' },
    { className: 'color-violet', color: '#8f00ff' },
  ];

  return (
    <div className="color-choice">
      {colors.map(c => (
        <button
          key={c.color}
          className={`color-button ${c.className}`}
          onClick={() => setColorCallback(c.color)}
        />
      ))}
    </div>
  );
};

export default ColorChoice;