const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h4>Hello, my name is Scotland, I am currently looking for a full-time position in software development after graduating from the Clever Programmer Bootcamp. My goal with front-end development is to be working with React for mobile and web applications. 

Fulfilling work is my goal, as well as doing a start-up business, working remotely, and traveling.

I want to do full-stack development in the future, as well as work with crypto, web3, and metaverse technologies.

My hobbies include working out, gaming, and hanging with my friends and family.</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
