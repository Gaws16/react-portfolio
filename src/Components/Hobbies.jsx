export default function Hobbies() {
  return (
    <div id="hobbies" className="text-gray-400  bg-gray-900 body-font mb-10">
      <section className="flex flex-col w-full justify-center items-center">
        <div className="header items-center text-center mb-8">
          <img
            src="../public/medal-solid.svg"
            alt="medal"
            className="w-14 m-auto"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            More About me
          </h1>
          <p className="w-1/2 m-auto">
            I think it&apos;s time to introduce you to the other side of me. I
            used to be the fat kid all my life. When you are overweight, life
            isn&apos;t exactly smooth. From battling unsolicited comments and
            the judgmental stares at health conditions that stem from all the
            extra kilos. I always thought that my weight didn&apos;t matter. I
            didn&apos;t think it was a problem, i didnt&apos;t think that i need
            a change. But that changed when I decided to sign up for a local
            half-marathon. At the time I was 100 kg, and honestly i didn&apos;t
            now what i was signing up for. I barely managed to finish it,and
            quickly realised in how bad of a shape i was. Then just something
            clicked in me, and I realised that if I didn&apos;t change my life,
            it would just get worse and worse. I promised myself that I would go
            back next year to the same race, but that time I would be prepared,
            that time I wouldn&apos;t struggle, and that time I would be
            different. <br />
            And that is how the passion for running was born. <br />
            The rest is history.
          </p>
        </div>
        <div className="imgContainer grid grid-cols-2">
          <img
            src="../public/plovdiv2.jpg"
            alt=""
            className="w-9/12  items-center m-auto rounded-xl mb-8 "
          />
          <img
            src="../public/Sofia3.jpg"
            alt=""
            className="w-10/12 items-center m-auto rounded-xl mb-8 "
          />
          <img
            src="../public/tarnovo.jpg"
            alt=""
            className="w-9/12 items-center m-auto rounded-xl "
          />
          <div className=" items-center m-auto p-4 w-11/12">
            <p className=" text-3xl">
              Tarnovo ultra - the begining, after the change.
            </p>
          </div>
          <div className=" items-center m-auto p-4 w-11/12">
            <p className=" text-3xl">
              Kodja Kaq - first encounter with &quot;the wall&quot;. A lot of
              lessons learned.
            </p>
          </div>
          <img
            src="../public/kodjakaq.jpg"
            alt=""
            className="w-9/12 items-center m-auto rounded-xl "
          />
          <img
            src="../public/trqvna.jpg"
            alt=""
            className="w-9/12 items-center m-auto rounded-xl "
          />
          <div className=" items-center m-auto p-4 w-11/12">
            <p className=" text-3xl">
              Trqvna Ultra - Came in prepared, turns out there is still a lot of
              lessons to learn.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
