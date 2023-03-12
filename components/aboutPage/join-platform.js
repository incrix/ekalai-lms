"use client";
import Image from "next/image";
import Join from "@/public/asserts/images/join.png";
import useWindowSize from "@/util/screen-size";

export default function joinPlatform() {
    const { width } = useWindowSize();
  return (
    <section className="join-platform">
      <Image src={Join} alt="" width={width > 500 ? "auto" : width * 0.90}/>
      <div className="join-platform-cont">
        <h2>
          Join <font>World's largest</font> learning platform today
        </h2>
        <div>Start learning by registering for free</div>
        <p>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
          nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        </p>
        <button>Sign up for Free</button>
      </div>
    </section>
  );
}
