import React, {Component} from 'react'
import Video from '../../components/Video'
import P1 from '../../img/wh.png';
import P2 from '../../img/2nd_page.png';
import P3 from '../../img/3rd_page.png';
import P4 from '../../img/4th_page.png';
import P5 from '../../img/5th_page.png';
import P6 from '../../img/6th_page.png';
import P7 from '../../img/7th_page.png';
import P8 from '../../img/whatttt.png';
import Image from '../../Image';
import Bot from '../../components/Bot';

export default class Preview extends Component {
  constructor() {
    super()
    this.state = {
      titleColor: 'rgb(237, 125, 40)'
    }
    this.onColorChange = this.onColorChange.bind(this)
  }
  render() {
    const {titleColor} = this.state;
    return (
      <div>
        <div>
          <h12> Subcribe For </h12>
        </div>
        <div
          style={{
            fontSize: '4vw',
            fontFamily: 'Impact, Charcoal, sans-serif',
            color: titleColor   
          }}
        >
          More Buyable Projects
        </div>
        <div className="btn btn-success" onClick={this.onColorChange}>
          Click Me To Change The Text To Another Random Color
        </div>
        <div className="App-intro">
          <div 
            className="left"
            style={{
              borderTop: '20px solid #000',
              borderLeft: '30px solid #474647',
              borderBottom: '20px solid #000',
              float: 'left',
              width: '50%'
            }}
          >
            <Image src={P1} />
          </div>
          <div
            className="right"
            style={{
              borderTop: '20px solid #000',
              borderLeft: '20px solid #000',
              borderBottom: '20px solid #000',
              borderRight: '30px solid #474647',
              float: 'right',
              width: '50%'
            }}
          >
            <Image src={P8} />
          </div>
          <div
            className="right col-xs-12"
            style={{
              position: 'center',
              borderTop: '40px solid #000',
              borderBottom: '20px solid #001',
              float: 'center center',
            }}
          >
            <Bot />
            <div
              style={{
                borderTop: '10px solid #000'
              }}>
              <h16>
                My Recent Videos
              </h16>
            </div>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/59iMmXm2QmY" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <div
              style={{
                borderTop: '2px solid #000',
                borderLeft: '20px solid #000',
                borderRight: '20px solid #000'
              }}
            >
              <h7>
                #ItzHaystBruh
              </h7>
            </div>
            <div style={{
              borderTop: '2px solid #000',
            }}>
              <a href = "https://www.youtube.com/channel/UCZWCelWub5JK_6J3qZOiFAw"> <img src="data:image/png;base64,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"/></a>
              <a href= "https://twitter.com/Hayter_YTw"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEVZjcr///9Wi8lUislRiMj4+v31+Pzu8/nq8Phbj8vj7Pbw9frZ5PJOhsff6fX3+fxum9DO3e+SstqYt92Gq9hnls7F1+x3oNJ+ptaKrdm2y+avx+XM2+60y+akwOFjlM6+0eipwOG5zudsl9BT8QXNAAANHUlEQVR4nO2da5eiuhKGoRLkItDIRUAU0P3//+MB7Z6GkEBuoJzV75dZs/cs4DG3SqWqYpj/7zLe/QGr649w//oj3L/+CPevP8L9649w//oj1CY7PJ0fVVXXdVLXVXVrT75z2OLF6xM65yrJM+hl9Pr+8/l3Ny/rR7ju+1ck/Dp6bZJDEGD0Q0eo+88Idf8/KivfPljrfMZKhAfPv8QR7tloaCQpwoFbVCfPXuFT1iA8+uc6RwHiYBu2J8ZZfDl5ur9GO+HXqWs8QDxNNxXCTXq/6m1JzYTerYwMLEX3rymztD5p/CSthKc4csX6JhUSQVZctM07+gitW+QaXBMLD6XhJo6e79JEaNk1YF14L0aES19HQ2ohtMLawDrxXkIoPR2VP04DoeXfM8m5c5ERx8qM6oT+PVKZPJcY3eSq1ldVCe1bvkL/HAhQlihZroqE58Jdle8FGdUKzahEaMeu1vmTiWhk/jsIrYex0gRDYQxiWVtOntArgq34eqHoLNdVZQkPbaZunwkJ3Fpq3yFJ6CUbzDAkIirOmxFeC2NzwJ6xqcR7qhRhtXUP/YdoiNvjMoTl9j30HyIUouuGOKETrWvELAg1goNRmPD035t66I8A3b5WJLTO7wbsEHEtst8QI7RuzTt76I+CRMDAESK0qo8A7AZjzD+lChHW7rvR/qnktm9ECJNNNhJcAkh5EQUIk812EjxCBWdH5Sa06s9pwacwJyIvoVW9z5BhCKdcMyonYbdMvBtoKlzyHLFyEp4/ZJkYC/P4b/gIT/99ImC31ag0ETrvN9XoguahhzD6UMAOMbvqICw/FrBbFvMldzEH4eetE0PhJTfjMuE1+2TAbqNRKxJ6xQf30V4A85v+JcJD8m6CRUEza74tEbYfPQhfQqUCoffhg/Bbcwv/PKH16YPwJZg7mponfATv/ng+Qcy2wWcJ7bf47iUELtt6myWMd9FHe82YNnOE5x3Moz9CNctNPENoF/sB7Popa7KZIbztqAm7RkwZu2E2oZ/vCbCzTxnGG5PQuq8YB7SGoBEk9KN9NWHXiBchwt01YaeMuuyzCMPs3d8rLqCapwxCq97NYv8ryGnbKAbhbuy1ocC98RPWG45CgFcCjfq5CKL5+emE1manMABuk0VPZY0qJLgtL+FtoyYEI4qrq9cfy1u239aUWE4QmRBQPD3hpxNutBZCUY2tSftRjicAwHks8DGQTTM1qIQnCYsUhJsdNdV0y+O0g5hqFERVGEYiz5yGhVEJY9GP7X+9RBAxYEQ3hd9nzYBR2mfuVSLdlLJg0Ag9iU6K6kMi5PIImBFqh3OGAPfN1w8qR+xcD03OMWiEMtumwDOPMT8i4HrmdNNLo3+xpKnYt6CS3AlTCL8kTmIg73987lgGMHhj04V9YYjsGhTCk8jQ/hZ+moTHhNMUAt6obV/YtsLkDoNCeBEHNPBr1jhyBmxEnBkUXr8LF0tmfPamecKjhIcNmu82Ody5Pmf55PYFmPaJwlmci3wLJrrplNCX6KRQ/NgS1m0ZEQo+QDvBgVG2vheLNGJAmN9TwrOEPYN+fc7WuVnqAwFniqhflI/eomuFFgzy95sQHmR2higZTI3+UhBxxgfYzerPp/pip0NgjKfpCaEn42JDo8l/YUolu9GCfOFQnrHTbULoyxjdiFjebtHMaAyEwu1D4bwASOYJLzLHTSghLAm/ZKY8QySSMxGKR7oQ6wVJ+CV1GoMmEWaHR854EIoFCEPWU+aUjVZbkvAosVb07TLdeYaM3FnMEan1I1/m6ASa0U6fJPTkdvcTa9B85j8jSgsEFE8DQ6Hc2RCM4k9IwlaOEFMPDSwnwZOVg/5PabKFVvpfjSMXSMJEzk+KUsZXHqsIxrVb+AlbyeQcyIcx4CSh7IFTwN4snOKoAfRvieTupUfJX7sz7IdGE0ko689Dc7FX9jlJO8quSbqnY94F35GNGBxPNQShIxt8Ae78On7023tcRC7GS3Fov9+Syrbh6ACDILxKh5cQlgRNB8+/tpeadxw60qfsIzOZIKykXcHgcn75F2/mmSdPWA5mBYJQenB3yuVz5umEUsZHLygGkylBKH12D30ist4aT6F0pAREgx+bIJQM1GviNHMhSDUVzXnJlx8xzWC5IAjlFgtoPNN5xLkhkWrNVqsQVDeYE8aEtuRy+HK1he1JI6HKMTQeLIhjwlDWouF0nonoIL0cjp2mY8KTrEUzE/0oq6NC8C4eDJcxoYyfrRc06vWcSHkKw3AYxzcmfMj+bIHmtdBUm2hQ8vuLjwkr6UfG2glVMnXQ4FxEEyEYQlUAeKSSD8gmrKWfiXXPpirDsDNMf20PXYRADyqTl1I4CEqZhPI9Y3YLLCGlAGVgEibyj4VmMRNQRAelsLNV2tCAxUxAEcmuzIuESo8tNCKWaoTMmUZ6tXgKC9f/YcpRC28dbvJ1Ehoo0jUWFfME2OvhTY2wD+TSUub4IBhFM/kOptXWqod4lorFOJ86KyYFouR3ddaze/oVoCZW7qoHhVXrKXxn7Z6kDoCHfBjcponUCo52P7RqGP3wBG9M6CgSRlpcUQcVn+ZTAdOLcVALQ17IOebVVTmMHjEJTcVkLi3+GlvBQfPSyILU5RH+fjTltFtYD/Ug8xmPsGoJDKy+w3DU08dhaD8ShKqpMmAoF/0v1ZtwaJaShMrJ28AbWMnSWUM6Eh4s+CRhqJyevlxOZVaejowydB88kTzl1tBFIoWOqmqQPjXOXScJNeSSoOwh67Oxai0ZZaPCQyShjnpCAInkRrHVUoZj7G0gCeWPuYfC0UXmtNTXU5AKpcM+RBL6eiphABR34XaUCm2lvXwUNEES2rqS8MGIypvQdvigqZAKkWhJEh40FlIA1xVZOmQCLamvHddyIQl15nCD8R//wmEVul5MhOhOYoRP2l5kiFxLob6h+H3xuKjSNJJdT5o6oKgW6KFeqeWtr1ePt3ATQltDURpAQX4Xucoo1GHK/Hv7eBs+zSi5KHZTQNhIH6GIx+2qs8gIROOHTwlP8keT8Lzmr8MTc5rqvYgAESGEU0JPeMwDxsFTEMWVL3xTY6y3ugEZUkDJzhNdL9zydvZDz5Yzt0+6b8Mii7hQCIVLQaby96N52itMT/woFELhpQm5iS/VgN5D/00SiFyjaJnOwqeIgJvkKuxl8x6F/psyICd/axrhSXyX1jHGrVjGVlUIFYTg1CQNmF5xQCoXB7lFzbthss5Jvkp9GGgmhhSVUCbX+VmFJSsuHAPST6JmpeIpw4PDOUJLdpPYp8fklGoXv3La0gXGBcg6ND3Zo9c2UTj8AcCBUdRnz7YPhy/rW4fD0fZOVdoEwZo3LCDKnRB0QkfNNn1Zb1ERJ3XVq076ZJL++mpNJMwXUwqaMaooaditPS/dRrhX9+eKHXPwSppLgUHo77DUVyfauRCrmpm+LfeGohbbZVWk0+bM2FLUMF4WoUx1jDcLDKoXmlkZUqZW1HuF6dlzTEL5DM43CYDuWWBXaL3urDYk64CdTWipBiZtK4gYzqGZOsLhrmq0DkNoeAnV4mk3FrUo5CKhtY9rA3qByzwhma3JrukwcQMNgxFFCHdTdh5mEnTnCe19TDZENRMRQvO8i2q7kMw4bBcId1ExGWbDWpfumfn4q4KMpepoS4QfemveUMF8vYpFQrP68KGIFir4LRN+uH06Pwi5CE3nk4cirTayMKFE1bvNBO5t6WSPh9A8f9Q9uQOBkSyeInARblbBXFRQLkcM8BF+1R9pgzN3veKEn+m1WapNJURo2pojJjQITc8KVQhNTy1vVb+AMyyQm1AizmZVoYiz8hY/YWeEf9CMCryAIoSdcfMxiBz3AMsQmk76IYijUlc6CU271B8BIyFwBUJXxQjNg56UDzW+xe2ECqFpVe82w8HgMNUUCE3zoTUaVBzQTcSiV8UJzWv+xvkGNTfBIEEJQjOMg3f1VBQJFzSQITRt7VGhnAoK8WRxKcLeA/eGwQgLXjWthKZTbr1sgCGXuilL2EfYb9pVoWFen7QWoenHzNsB9PPhopUMJlcgfN4OsE0zYvcuXd9WhbBbN+otmhFQqlAYVY3Q/PLTtddGwFGrUrhIkfB5c86ajIChVivMpEzYMV6yFaNHBa3QVQi7KafK3RXmHDCyWL2AthbCzgC4pZoZARk5d3bDnDQRdrZqG2vM0er40tmYf35pIzTN46nKadeuSPD1WUa6CrxrJOxvXbmWSNmTg1F+CfVVXtZK2OnLueQ4kJ5aAQVNHWot9qqbsJdzK143NQuxPRXJ1gxhaw1C85W6lTX93YwcmP29CuBmUfnQevPAt1Yi7BW2dZlHzVw6Sc+GkZvlaXKTT0Sd14qEvbxTWyVlETXGK3Wmx0XfwgFqoqJM7o+r3pE31sqEvSzb80/n9tKnP8Vl2qks4yS5V2179UNnRbinNiD8kfV1tG3nKds+Cie1y2pDwjfpj3D/+iPcv/4I968/wv3rf8WsynlUeDKEAAAAAElFTkSuQmCC"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onColorChange() {
    // Math.random() gives a random number between 0 and 1 (0.32321 0.111 0.99999)
    // Math.floor(2123.434324324324) equals 13
    // const colors = ['pink', 'blue', 'red'] then colors[0] === 'pink' colors[1] === 'blue'
    const colors = ['blue', 'pink', 'red', 'purple', 'rgb(237, 125, 40)', 'lime'];
    let number = Math.random() * colors.length
    this.setState({ titleColor: colors[Math.floor(number)]})
  }
}