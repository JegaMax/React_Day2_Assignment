import Branch from "./Branch";

function Engineering() {
  const branches = [
    {
      title: "Aerospace engineering ",
      desc: "An Aerospace Engineering Degree involves the study of air and space travel. This might include military aircraft design and development, along with commercial airline design and satellite technology. The terms Aerospace and Aeronautical are both often used interchangeably, yet there are key differences between the two. Aeronautical Engineering relates to craft that remain in our atmosphere, while Aerospace Engineering refers to aircraft that venture outside our atmosphere. Most programs in the United States have changed their names from Aeronautical to Aerospace over the past couple decades, but there are still some programs that go by the historical name.",
      image: "https://uploads.sarvgyan.com/2016/03/aerospace.jpg",
      subTitle: "Other related Branches in Aerospace engineering",
      subBranches: [
        "Aeronautical engineering",
        "Astronautical engineering",
        "Avionics engineering",
      ],
    },
    {
      title: "Chemical engineering",
      desc: "As the name implies, Chemical Engineering is the practical application of chemistry. This type of engineering degree involves technology that utilizes chemical reactions to solve problems. A chemical engineer creates new products, including: Cosmetics, foods, pharmaceuticals, beverages, and cleaners from raw chemicals. this is a very broad engineering degree and allows for a number of different forms of employment. It is also one of the most challenging degrees available.",
      image:
        "https://frontiersinblog.files.wordpress.com/2019/09/chemical-engineer-chemistry-industry-zeolite-ionic-polymer.jpg?w=1000",
      subTitle: "Other related Branches in Chemical engineering",
      subBranches: [
        "Biomolecular engineering",
        "Materials engineering",
        "Molecular engineering",
        "Process engineering",
        "Corrosion engineering",
      ],
    },
    {
      title: "Civil engineering",
      desc: "Civil Engineering involves the development of infrastructure such as buildings, railways, roads construction, bridges and general construction project management. Civil Engineers also play an important role in rebuilding projects, such as in the event of a natural disaster. Civil Engineers may work in the private or public sector at any level. This is a very broad engineering degree. Environmental Engineering, Structural Engineering and Marine Engineering are all specialties of Civil Engineering.",
      image: "https://www.cuchd.in/uie/images/civil-dept-img.jpg",
      subTitle: "Other related Branches in Civil engineering",
      subBranches: [
        "Environmental Engineering",
        "Structural engineering",
        "Geotechnical engineering",
        "Transport engineering",
      ],
    },
    {
      title: "Computer engineering",
      desc: "Another industry that continues to expand is of course the Information Technology (IT) industry. This involves both computer sciences and electrical engineering. Successful graduates may find themselves in Telecommunications, Networking, Software Application Development, or Manufacturing, and additional industries are emerging, such as Application Development, Web Development, Network Security / Cybersecurity, and Cloud Computing, among others. This type of degree has good future potential as most industries rely on information technology. Read more about the computer engineering degree.",
      image:
        "https://inteng-storage.s3.amazonaws.com/img/iea/QjOdqW0AGd/sizes/computer-eng-salaries-worldwide_md.jpg",
      subTitle: "Other related Branches in Computer engineering",
      subBranches: [
        "Hardware engineering",
        "Software engineering",
        "Network engineering",
        "Information technology engineering",
        "Cryptographic engineering",
      ],
    },
    {
      title: "Electrical engineering",
      desc: "An Electrical Engineering Degree involves the study of energy. Energy is available in various forms such as electrical, hydro and natural sources such as wind and solar energy. An Electrical Engineer develops technologies to assist with the practical application of such energies. Electrical Engineers design components for electronic equipment, communications systems, power grids, automobiles, and more. Most employers require an Electrical Engineering Degree at some level to work as an Electrical Engineer, and other licensing or certification requirements may also be required depending on where you live.",
      image:
        "https://worldscholarshipforum.com/wp-content/uploads/2021/02/Best-Electrical-Engineering-Books.jpg",
      subTitle: "Other related Branches in Electrical engineering",
      subBranches: [
        "Electronic engineering",
        "Power engineering",
        "Optical engineering",
      ],
    },
    {
      title: "Mechanical engineering",
      desc: "A Mechanical Engineering Degree involves the design of mechanical systems. These systems assist industries such as: manufacturing, aeronautics, nanotechnology, nuclear power production, heating and cooling. A primary focus is on thermodynamics, structural analysis, materials science, and kinematics. This is arguably the broadest of all engineering degrees available today and takes in a wide range of engineering disciplines.",
      image: "https://static.toiimg.com/photo/70512247.cms",
      subTitle: "Other related Branches in Mechanical engineering",
      subBranches: [
        "Optomechanical engineering",
        "Thermal engineering",
        "Automotive engineering",
        "Industrial plant engineering",
      ],
    },
  ];

  return (
    <div>
      <h1 className="title">Engineering</h1>
      <p className="title-quote">
        Engineers need good mathematical ability, but much more than that. They
        have to be imaginative, responsible, creative, and they must be very
        good at working with all sorts of other people. Geography, economics,
        art, history, modern languages, psychology, as well as the traditional
        maths and physics, can all help you to become an excellent engineer.'
      </p>
      <div className="container">
        {branches.map((branch, index) => (
          <Branch
            key={index}
            title={branch.title}
            desc={branch.desc}
            image={branch.image}
            subTitle={branch.subTitle}
            subBranches={branch.subBranches}
          />
        ))}
      </div>
    </div>
  );
}

export default Engineering;
