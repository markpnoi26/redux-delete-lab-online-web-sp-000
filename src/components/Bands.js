import React from 'react'
import Band from './Band'

export default class Bands extends React.Component {

  renderBands = () => {
    console.log(this.props.bands)
    return(
      this.props.bands.map(band=> <Band key={band.id} {...band} deleteBand={this.props.deleteBand}/>)
    )
  }

  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    )
  }
}
