import { Component } from 'react'
// import './App.css';

class Hasil extends Component {
  render() {
    return <div>Hasil: {this.props.hasil}</div>
  }
}

class Number extends Component {
  render() {
    return <div>
      <button onClick={() => this.props.click(1)}>1</button>
      <button onClick={() => this.props.click(2)}>2</button>
      <button onClick={() => this.props.click(3)}>3</button><br />
      <button onClick={() => this.props.click(4)}>4</button>
      <button onClick={() => this.props.click(5)}>5</button>
      <button onClick={() => this.props.click(6)}>6</button><br />
      <button onClick={() => this.props.click(7)}>7</button>
      <button onClick={() => this.props.click(8)}>8</button>
      <button onClick={() => this.props.click(9)}>9</button><br />
      <button onClick={() => this.props.click('=')}>=</button>
    </div>
  }
}
class Tambah extends Component {
  state = {
    angka: []
  }
  click = (v) => {
    const { angka } = this.state
    if (v === '=') {
      const hasil = angka.reduce((a, b) => a + b)
      this.props.calculate(hasil)
      console.log(hasil)
    } else {
      angka.push(v)
      this.setState({ angka })
    }
  }
  render() {
    return <div>
      Komponen Pertambahan <br />
      {this.state.angka.join('+')}
      <br /><Number click={this.click} />
    </div>
  }
}
class Kali extends Component {
  render() {
    return <div>
      Komponen Perkalian
    </div>
  }
}
class Bagi extends Component {
  render() {
    return <div>
      Komponen Pembagian
    </div>
  }
}
class Kurang extends Component {
  render() {
    return <div>
      Komponen Pengurangan
    </div>
  }
}
class App extends Component {
  state = {
    operator: null,
    hasil: 0
  }
  select = (s) => {
    this.setState({ operator: s })
  }
  calculate = (hasil) => {
    this.setState({ hasil })
  }
  render() {
    return (
      <div>
        Pilih salah satu <br />
        <button onClick={() => this.select('+')}>+</button>
        <button onClick={() => this.select('-')}>-</button>
        <button onClick={() => this.select(':')}>:</button>
        <button onClick={() => this.select('x')}>x</button>
        <Hasil hasil={this.state.hasil} />
        <br />
        <br />
        { this.state.operator === ":" && <Bagi calculate={this.calculate} />}
        { this.state.operator === "x" && <Kali calculate={this.calculate} />}
        { this.state.operator === "+" && <Tambah calculate={this.calculate} />}
        { this.state.operator === "-" && <Kurang calculate={this.calculate} />}
      </div>
    )
  }
}

export default App;
