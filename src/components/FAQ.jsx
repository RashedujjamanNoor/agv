const FAQ = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      <div className="text-white text-center mb-4">
        <h3 className="">ANY QUERIES YOU HAVE</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl">
          QUESTIONS YOU MAY ASK
        </h2>
      </div>
      <div className=" text-white max-w-3xl rounded-md">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title">Tell me about your agency?</div>
          <div className="collapse-content text-sm">
            <p className="para">
              At VidlyPro, we help coaches, trainers and Creator's build their
              personal brand through high quality video editing and social media
              marketing.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border mt-4">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title ">
            Tell me about your content plan?
          </div>
          <div className="collapse-content text-sm">
            <p className="para">
              We analyze your existing content, identify your niche and offer a
              comprehensive content plan catering to your personal brand.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border mt-4">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title ">What services will you provide?</div>
          <div className="collapse-content text-sm">
            <p className="para">
              We offer a range of video editing services including YouTube
              videos, Shorts, Instagram Reels, TikTok and Facebook Reels,
              Promotional Videos, and more. Our social media marketing services
              have a proven record of growing sales through creating engaging
              posts, and running social media ads.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border mt-4">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title ">
            What if I don’t get the results?
          </div>
          <div className="collapse-content text-sm">
            <p className="para">
              We have replicated our strategies for multiple brands, channels,
              and companies and have successfully scaled their businesses
              through their social media. It is very unlikely that what has
              worked for everyone else, will not work for you. ;)
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border mt-4">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title ">
            Why wouldn’t I hire a freelancer?
          </div>
          <div className="collapse-content text-sm">
            <p className="para">
              We have a dedicated team of 30+ editors. Our quality of work will
              always outperform any sole freelancer working on their own.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border mt-4">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title ">Tell me about your workflow?</div>
          <div className="collapse-content text-sm">
            <p className="para">
              We understand your project, your consumer base, and your
              businesses, and then schedule a discovery call with you to
              understand your requirements. Afterwards, our team takes care of
              task management, delegation, editing, and running feedback loops
              with you to ensure best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
