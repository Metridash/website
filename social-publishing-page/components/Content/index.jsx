import React from "react";

// components
import Section from "../Sections";

const Content = () => {
  return (
    <div className="bg-brand p-24 text-white">
      <Section
        heading={"Manage multiple social media accounts in one place"}
        para={
          "Simplify your social publishing process by adding all your Twitter,Facebook and Instagram accounts to Keyhole social publishing. Avoid the headache of managing various social accounts by scheduling posts for all your accounts from one platform. Also, it happens to be the same platform that gives you insight on how to optimize your posts.Fewer tools, fewer platforms and more time for you!"
        }
        button={"START SCHEDULING YOUR POSTS TODAY"}
        image={"image3.png"}
        classname={"flex gap-8 my-8"}
      />
      <Section
        heading={"Don't miss your optimal post times"}
        para={
          "Do it once, and then forget about it!  Schedule your posts directly from your desktop at your most convenient time. Of course, this might not be optimal time suggested by Keyhole’s data-backed optimization suggestions.But don’t worry! You can publish right away or at a later time to make sure you’re publishing at the best time."
        }
        button={"START YOUR FREE TRIAL"}
        image={"image1.png"}
        classname={"flex flex-row-reverse gap-8 my-8"}
      />
      <Section
        heading={"Visualize your whole social media strategy"}
        para={
          "It’s like the map of your content strategy.Metridash calendar view allows you to map out your social media campaigns inadvance to see your strategy at work. Also, you’ll be able to view both your published posts from months back and future posts months in advance."
        }
        button={"SCHEDULE YOUR FIRST POST"}
        image={"image4.png"}
        classname={"flex gap-8 my-8"}
      />
      <Section
        heading={"Get full-scale access to analytics"}
        para={
          "We are, after all, your trusted social media analytics provider.Measure each post’s performance with a detailed sideview of your profile analytics.Also, see how your posts impact your overall strategy on your profile analytics.."
        }
        button={"START YOUR FREE TRIAL"}
        image={"image6.png"}
        classname={"flex flex-row-reverse gap-8 my-8"}
      />
      <Section
        heading={"Teamwork makes the dream work"}
        para={
          "Collaborate with your team or get your clients on board.Forget about sending files back and forth across your teams and clients. Keyhole allows your team to work on your content within the platform. Also, give your clients or managers access to see the posts before they are published."
        }
        button={"TRY IT FOR FREE"}
        image={"image5.png"}
        classname={"flex gap-8 my-8"}
      />
    </div>
  );
};

export default Content;
