class battlefield {
  constructor (config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(.battlefield);
    this.ctx = this.canvas.getContext("2d");
  }
  
  
  async function mapLoad(map) {
    const response = await fetch ('maps/${map}.json');
    const mapData = await response.json();
    return mapData
  }
}