import Image from "next/image";
import Study from "../../public/asserts/images/study.png";

export default function makeLearning() {
  return (
    <section className="make-learning">
      <h2>Making Your Learning More Enjoyable</h2>
      <div className="make-learning-content">
        <div className="make-learning-text">
            
        </div>
        <div className="make-learning-img">
          <Image
            src={Study}
            alt="Make Learning Fun"
            height={400}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
