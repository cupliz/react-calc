import React from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';

class ModalNama extends React.Component {
  state = {
    nama: this.props.nama
  }
  save = () => {
    this.props.gantiNama(this.state.nama)
    this.props.close()
  }
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton onHide={this.props.close}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormControl defaultValue={this.props.nama} onChange={(e) => this.setState({ nama: e.target.value })} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>Close</Button>
          <Button variant="primary" onClick={this.save}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}
class App extends React.Component {
  state = {
    nama: 'Nicole',
    edit: false
  }
  gantiNama = (nama) => {
    this.setState({ nama })
  }
  render() {
    return (
      <div className="container">
        <h1>{this.state.nama}</h1>
        <Button onClick={() => this.setState({ edit: true })}>Ganti Nama</Button>
        {this.state.edit &&
          <ModalNama
            nama={this.state.nama}
            gantiNama={this.gantiNama}
            close={() => this.setState({ edit: false })}
          />}
      </div>
    );
  }
}

export default App;
