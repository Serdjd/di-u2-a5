export default function Clock({ time }) {
    let hours = time.getHours();
    let name = (hours >= 0 && hours <= 6) ? 'night' : 'day'
    return (
      <h1 id="time" class={name}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  