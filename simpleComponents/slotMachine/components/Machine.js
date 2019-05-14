
class Machine extends React.Component {
  render() {
    const {s1, s2, s3} = this.props;
    return (
      <div>
        <h1>Slot Machine</h1>
        <p>{s1} {s2} {s3}</p>
        <p>{s1 > s2 && 'Player 1 won player 2'}</p>
      </div>
    )
  }
}
