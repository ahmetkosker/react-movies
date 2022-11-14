export default function MainSearchBar({ data }) {
  console.log(data);
  return (
    <div className="mainSearchBar">
      {data.map((each) => {
        return (
          <div className="bar">
            <div>{each.original_title}</div>
          </div>
        );
      })}
    </div>
  );
}
