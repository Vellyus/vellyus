class Space {
  constructor(x, y, id, token) {
    this.x = x;
    this.y = y;
    this.id = `space - ${x} -${y}`;
    this.token = null;
    this.diameter = 76;
    this.radius = this.diameter / 2;
  }

  get htmlToken() {
    /*Basically, it returns the Element of the token.
    The instructor created 'div' element and stored it in 'const token'
    This getter would return that specific 'div' element */
    return document.getElementbyId(this.id);
  }

  /**
   * Draw SVG space
   */
  drawSVGSpace() {
    const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    svgSpace.setAttributeNS(null, "id", this.id);
    svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "r", this.radius - 8);
    svgSpace.setAttributeNS(null, "fill", "black");
    svgSpace.setAttributeNS(null, "stroke", "none");

    document.getElementById("mask").appendChild(svgSpace);
  }

  /**
 * Updates space to reflect a token has been dropped into it.
 * @param {Object} token - The dropped token
 */

  /**
   * Checks if space has an associated token to find its owner
   * @return  {(null|Object)} Returns null or the owner object of the space's associated token.
   */

  get owner() {
    if (this.token === null) {
      return null;
    } else {
      return this.token.owner;
    }
  }
  mark(token) {
    this.token = token;
  }
}
