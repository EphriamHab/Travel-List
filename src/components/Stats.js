
export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding some item to your packing list 🚀</em>
        </p>
      );
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage !== 100
            ? `💼 You have ${numItems} item in your list, and you have already packed ${numPacked} (${percentage}%)`
            : "You Got everything! Ready to go ✈"}
        </em>
      </footer>
    );
  }
  
  