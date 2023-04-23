import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Arrows = (props) => {
    return (
        <div className={Number(props.id) !== 1 ? 'spacePrevNext' : 'spacePrev'}>
        {Number(props.id) !== 1 &&
          <Link className="btnPrev" to={`/${props.redirect}/${Number(props.id) - 1}`}>
            <FaArrowAltCircleLeft size={30} />
          </Link>
        }
        {Number(props.id) !== props.lastNumer &&
          <Link className="btnNext" to={`/${props.redirect}/${Number(props.id) + 1}`}>
             <FaArrowAltCircleRight size={30} />
          </Link>
        }
      </div>
        )
    }
    export default Arrows;