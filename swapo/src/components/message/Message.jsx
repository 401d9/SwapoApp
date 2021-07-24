import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={
            own
              ? "https://pbs.twimg.com/media/E4qO_7dWQAMwc57.jpg"
              : "https://otakukart.com/wp-content/uploads/2020/12/Luffy-1200x900.jpg"
          }
          alt=""
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          minima consequatur provident est id, culpa saepe accusantium voluptate
          hic impedit sequi facilis, vero iste quo eligendi repudiandae nostrum
          illum officiis!
        </p>
      </div>
      <div className="messageBottom">1 Hour ago</div>
    </div>
  );
}
