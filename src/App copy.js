import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Image,
  Columns,
  List,
  Text,
  Highlight,
  Video,
  Footer,
  Quote
} from "@sambego/diorama";

import Cant from "./video/cant.mp4";
import NPM from "./video/npm.mp4";
import cc from "./img/cc.svg";
import Sam from "./img/sam.png";

import Simple1 from "./img/simple-1.svg";
import Simple2 from "./img/simple-2.svg";
import Simple3 from "./img/simple-3.svg";

import Detail1 from "./img/detail-1.svg";
import Detail2 from "./img/detail-2.svg";
import Detail3 from "./img/detail-3.svg";
import Detail4 from "./img/detail-4.svg";
import Detail5 from "./img/detail-5.svg";
import Detail6 from "./img/detail-6.svg";
import Detail7 from "./img/detail-7.svg";
import Detail8 from "./img/detail-8.svg";
import Detail9 from "./img/detail-9.svg";


function App() {
  return (
    <Deck
      footer={
        <Footer
          left={<Highlight color="#C594C5">@sambego</Highlight>}
          right={<Highlight color="#C594C5">ac.sambego.tech</Highlight>}
        />
      }
    >
      <Slide style={{ background: "#C594C5", color: "#fff" }}>
        <Video
          src={Cant}
          loop
          autoplay
          full
          color="#C594C5"
          style={{ overflow: "hidden", zIndex: 1 }}
        />
        <Title style={{ 
          color: "#ffffff", 
          position: "relative", 
          zIndex: 1,
          textShadow: '-4px -4px 0 #C594C5,4px -4px 0 #C594C5,-4px 4px 0 #C594C5,4px 4px 0 #C594C5',
        }}>
          Can't touch this!
        </Title>
        <Image
          src={cc}
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            width: "10%",
            zIndex: 2,
          }}
          alt="Creative commons"
        />
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src={Sam} alt="A picture of me" full color="#C594C5" />
          </div>
          <div>
            <Subtitle>Sam Bellen</Subtitle>
            <List>
              <li>Developer Advocate Engineer</li>
              <li>Auth0</li>
              <li>GDE</li>
              <li>@sambego</li>
            </List>
          </div>
        </Columns>
      </Slide>
      {/* <Slide>
        <video src={NPM} autoPlay style={{ height: "80vh" }}></video>
        <Text>
          <span style={{ fontFamily: "monospace" }}>npx @sambego/about-me</span>
        </Text>
      </Slide> */}
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: ".9vw solid #C594C5" }}
            href="https://ac.sambego.tech"
          >
            ac.sambego.tech
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>Summary</Subtitle>
        <List>
          <li>Attribute-Based Access Control</li>
          <li>Role-Based Access Control</li>
          <li>Relationship-Based Access Control</li>
        </List>
      </Slide>

      <Slide style={{ background: "#C594C5" }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: ".9vw solid #000"}}>Access</span> Control
        </Title>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#C594C5">Access control</Highlight> is the art of regulating <Highlight color="#C594C5">who can do what</Highlight> on your system.
        </Text>
      </Slide>

      <Slide style={{ background: "#C594C5" }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: '.8vw solid #000'}}>A</span>BAC
        </Title>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight color="#C594C5">Attribute-Based</Highlight> Accss Control
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight color="#C594C5">Policy-Based</Highlight> Accss Control
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          Attributes
        </Subtitle>
        <List>
          <li>User</li>
          <li>Environment</li>
          <li>Resource</li>
          <li>Action</li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>
          User
        </Subtitle>
        <List>
          <li>Role</li>
          <li>Organization</li>
          <li>Security clearance</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>
          Environment
        </Subtitle>
        <List>
          <li>Time of day</li>
          <li>Location of data</li>
          <li>Current thread level</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>
          Resource
        </Subtitle>
        <List>
          <li>Creation date</li>
          <li>Owner</li>
          <li>Data sensitivity</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>
          Action
        </Subtitle>
        <List>
          <li>Read</li>
          <li>Write</li>
          <li>Delete</li>
          <li>...</li>
        </List>
      </Slide>     
      <Slide>
        <Text>
          <Highlight color="#fff">Any engineer</Highlight> can <Highlight color="#fff">write</Highlight> to <Highlight color="#fff">any file</Highlight>, if we are currently <Highlight color="#fff">not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#C594C5">Any engineer</Highlight> can <Highlight color="#e2c9e2">write</Highlight> to <Highlight color="#e2c9e2">any file</Highlight>, if we are currently <Highlight color="#e2c9e2">not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">Any engineer</Highlight> can <Highlight color="#C594C5">write</Highlight> to <Highlight color="#e2c9e2">any file</Highlight>, if we are currently <Highlight color="#e2c9e2">not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">Any engineer</Highlight> can <Highlight color="#e2c9e2">write</Highlight> to <Highlight color="#C594C5">any file</Highlight>, if we are currently <Highlight color="#e2c9e2">not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">Any engineer</Highlight> can <Highlight color="#e2c9e2">write</Highlight> to <Highlight color="#e2c9e2">any file</Highlight>, if we are currently <Highlight color="#C594C5">not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      
      <Slide>
        <Text>
          <Highlight color="#fff">An accountant</Highlight> can <Highlight color="#fff">upload</Highlight> <Highlight color="#fff">an invoice</Highlight>, if it is <Highlight color="#fff">during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#C594C5">An accountant</Highlight> can <Highlight color="#e2c9e2">upload</Highlight> <Highlight color="#e2c9e2">an invoice</Highlight>, if it is <Highlight color="#e2c9e2">during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">An accountant</Highlight> can <Highlight color="#C594C5">upload</Highlight> <Highlight color="#e2c9e2">an invoice</Highlight>, if it is <Highlight color="#e2c9e2">during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">An accountant</Highlight> can <Highlight color="#e2c9e2">upload</Highlight> <Highlight color="#C594C5">an invoice</Highlight>, if it is <Highlight color="#e2c9e2">during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">An accountant</Highlight> can <Highlight color="#e2c9e2">upload</Highlight> <Highlight color="#e2c9e2">an invoice</Highlight>, if it is <Highlight color="#C594C5">during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#fff">a HR representative</Highlight> can <Highlight color="#fff">look up</Highlight> <Highlight color="#fff">personal details</Highlight>, if the subject <Highlight color="#fff">is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#C594C5">a HR representative</Highlight> can <Highlight color="#e2c9e2">look up</Highlight> <Highlight color="#e2c9e2">personal details</Highlight>, if the subject <Highlight color="#e2c9e2">is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">a HR representative</Highlight> can <Highlight color="#C594C5">look up</Highlight> <Highlight color="#e2c9e2">personal details</Highlight>, if the subject <Highlight color="#e2c9e2">is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">a HR representative</Highlight> can <Highlight color="#e2c9e2">look up</Highlight> <Highlight color="#C594C5">personal details</Highlight>, if the subject <Highlight color="#e2c9e2">is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#e2c9e2">a HR representative</Highlight> can <Highlight color="#e2c9e2">look up</Highlight> <Highlight color="#e2c9e2">personal details</Highlight>, if the subject <Highlight color="#C594C5">is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        ABAC allows for a <Highlight color="#C594C5">fine grained controll</Highlight> over <Highlight color="#C594C5">all possible actions</Highlight> on your infrastructure.
        </Text>
      </Slide>
      <Slide>
        <Text>
        Depending on your architecture or organization, <Highlight color="#C594C5">this might be overkill</Highlight>.
        </Text>
      </Slide>



      <Slide style={{ background: "#C594C5" }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: '.8vw solid #000'}}>R</span>BAC
        </Title>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight color="#C594C5">Role-Based</Highlight> Accss Control
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
          A user has <Highlight color="#C594C5">one or more roles</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>
          Roles
        </Subtitle>
        <List>
          <li>Admin</li>
          <li>Engineer</li>
          <li>Guest</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Text>
          A role has <Highlight color="#C594C5">one or more permissions</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>
          Permissions
        </Subtitle>
        <List>
          <li>Read a resource</li>
          <li>Write to a resource</li>
          <li>Delete a resource</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color="#C594C5">guest</Highlight> is able to <Highlight color="#C594C5">read</Highlight> all documentation.
        </Text>
      </Slide>
      <Slide>
        <Text>
          An <Highlight color="#C594C5">engineer</Highlight> is able to <Highlight color="#C594C5">read</Highlight> and <Highlight color="#C594C5">edit</Highlight> all documentation.
        </Text>
      </Slide>
      <Slide>
        <Text>
          An <Highlight color="#C594C5">admin</Highlight> is able to <Highlight color="#C594C5">read</Highlight>, <Highlight color="#C594C5">edit</Highlight> and <Highlight color="#C594C5">delete</Highlight> all documentation.
        </Text>
      </Slide>





      <Slide style={{ background: "#C594C5" }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: '.8vw solid #000'}}>R<span style={{textTransform: "lowercase"}}>e</span></span>BAC
        </Title>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight color="#C594C5">Relationship-Based</Highlight> Accss Control
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#C594C5">Permissions</Highlight> for a resource are defined by the user's <Highlight color="#C594C5">relationship to that resource</Highlight>.
        </Text>
      </Slide>
      
      
      <Slide>
        <Text>
        <Highlight color="#C594C5">Users</Highlight> are connected to <Highlight color="#C594C5">objects</Highlight> trough <Highlight color="#C594C5">relationships</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color="#C594C5">user</Highlight> can be any sort of <Highlight color="#C594C5">group, folder, organisation, appliation user</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          An <Highlight color="#C594C5">object</Highlight> is <Highlight color="#C594C5">any resource</Highlight> your application or api deals with.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color="#C594C5">relationship</Highlight> is <Highlight color="#C594C5">how a particular user is connected to a specific objects</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A resource can be <Highlight color="#C594C5">a user in one relationship</Highlight> and  <Highlight color="#C594C5">an object in another</Highlight>.
        </Text>
      </Slide>

      <Slide>
        <Text>
          There are <Highlight color="#C594C5">direct</Highlight> and <Highlight color="#C594C5">indirect relationships</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color="#C594C5">user</Highlight> can have a <Highlight color="#C594C5">direct relationship</Highlight> to a resource.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#fff">Sam</Highlight> is an <Highlight color="#fff">editor</Highlight> of <Highlight color="#fff">this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">Sam</Highlight> is an <Highlight color="#e2c9e2">editor</Highlight> of <Highlight color="#e2c9e2">this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is an <Highlight color="#C594C5">editor</Highlight> of <Highlight color="#e2c9e2">this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is an <Highlight color="#e2c9e2">editor</Highlight> of <Highlight color="#C594C5">this slidedeck</Highlight>.
        </Text>
      </Slide>
      
      <Slide>
        <Text>
          A user can be <Highlight color="#C594C5">indirectly</Highlight> related to a resource <Highlight color="#C594C5">trough a group they are related to</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#fff">Sam</Highlight> is a <Highlight color="#fff">member</Highlight> of <Highlight color="#fff">Auth0</Highlight>, and can therefor <Highlight color="#fff">view</Highlight> all <Highlight color="#fff">slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">Sam</Highlight> is a <Highlight color="#e2c9e2">member</Highlight> of <Highlight color="#e2c9e2">Auth0</Highlight>, and can therefor <Highlight color="#e2c9e2">view</Highlight> all <Highlight color="#e2c9e2">slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is a <Highlight color="#C594C5">member</Highlight> of <Highlight color="#e2c9e2">Auth0</Highlight>, and can therefor <Highlight color="#e2c9e2">view</Highlight> all <Highlight color="#e2c9e2">slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is a <Highlight color="#e2c9e2">member</Highlight> of <Highlight color="#C594C5">Auth0</Highlight>, and can therefor <Highlight color="#e2c9e2">view</Highlight> all <Highlight color="#e2c9e2">slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is a <Highlight color="#e2c9e2">member</Highlight> of <Highlight color="#e2c9e2">Auth0</Highlight>, and can therefor <Highlight color="#C594C5">view</Highlight> all <Highlight color="#e2c9e2">slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is a <Highlight color="#e2c9e2">member</Highlight> of <Highlight color="#e2c9e2">Auth0</Highlight>, and can therefor <Highlight color="#e2c9e2">view</Highlight> all <Highlight color="#C594C5">slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      
      <Slide>
        <Text>
          A user can be <Highlight color="#C594C5">indirectly</Highlight> related to a resource trough <Highlight color="#C594C5">a parent they are related to</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#fff">Sam</Highlight> is the <Highlight color="#fff">owner</Highlight> of <Highlight color="#fff">a folder</Highlight> on a drive, and therefor also <Highlight color="#fff">owns</Highlight> all <Highlight color="#fff">slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">Sam</Highlight> is the <Highlight color="#e2c9e2">owner</Highlight> of <Highlight color="#e2c9e2">a folder</Highlight> on a drive, and therefor also <Highlight color="#e2c9e2">owns</Highlight> all <Highlight color="#e2c9e2">slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is the <Highlight color="#C594C5">owner</Highlight> of <Highlight color="#e2c9e2">a folder</Highlight> on a drive, and therefor also <Highlight color="#e2c9e2">owns</Highlight> all <Highlight color="#e2c9e2">slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is the <Highlight color="#e2c9e2">owner</Highlight> of <Highlight color="#C594C5">a folder</Highlight> on a drive, and therefor also <Highlight color="#e2c9e2">owns</Highlight> all <Highlight color="#e2c9e2">slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is the <Highlight color="#e2c9e2">owner</Highlight> of <Highlight color="#e2c9e2">a folder</Highlight> on a drive, and therefor also <Highlight color="#C594C5">owns</Highlight> all <Highlight color="#e2c9e2">slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#e2c9e2">Sam</Highlight> is the <Highlight color="#e2c9e2">owner</Highlight> of <Highlight color="#e2c9e2">a folder</Highlight> on a drive, and therefor also <Highlight color="#e2c9e2">owns</Highlight> all <Highlight color="#C594C5">slide decks in that folder</Highlight>.
        </Text>
      </Slide>

      <Slide>
        <Image src={Simple1} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Simple2} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Simple3} alt="A simple example of ReBAC" />
      </Slide>
      
      
      <Slide>
        <Image src={Detail2} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail3} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail4} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail5} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Text>
          Let's add some <Highlight color="#C594C5">users</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Image src={Detail7} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail8} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail6} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Text>
          Lets do an <Highlight color="#C594C5">exercise</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Image src={Detail9} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Text>
          Will <Highlight color="#C594C5">Ben</Highlight> be able to <Highlight color="#C594C5">view the "can't touch this"</Highlight> slidedeck?
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#C594C5">No!</Highlight>
        </Text>
      </Slide>
     
      <Slide>
        <Subtitle>
          3, 2, 1 <Highlight color="#C594C5">Action</Highlight>!
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: ".9vw solid #C594C5" }}
            href="https://play.fga.dev"
            target="_BLANK"
            rel="noreferrer"
          >
            play.fga.dev
          </a>
        </Subtitle>
      </Slide>

      <Slide>
        <Text>
          So what's the <Highlight color="#C594C5">difference between RBAC and ReBAC</Highlight>?
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">RBAC defined permissions and roles</Highlight> are typically valid for <Highlight color="#C594C5">all resources of a certain resource type</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          eg. An <Highlight color="#C594C5">admin</Highlight> can <Highlight color="#C594C5">delete all posts</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">ReBAC</Highlight> defines relationships per <Highlight color="#C594C5">specific resource</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          eg. An <Highlight color="#C594C5">admin</Highlight> can only delete <Highlight color="#C594C5">posts assigned to them</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">ReBAC</Highlight> is a more <Highlight color="#C594C5">fine grained</Highlight> aproach to authorization.
        </Text>
      </Slide>

      <Slide>
        <Subtitle>
        Let's <Highlight color="#C594C5">recap</Highlight>.
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">RBAC</Highlight> uses <Highlight color="#C594C5">permissions</Highlight> and <Highlight color="#C594C5">roles</Highlight> to grant privileges.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">ABAC</Highlight> checks <Highlight color="#C594C5">a combination of different attributes</Highlight> to grant privileges.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#C594C5">ReBAC</Highlight> looks at <Highlight color="#C594C5">relationships</Highlight> between <Highlight color="#C594C5">users</Highlight> and <Highlight color="#C594C5">objects</Highlight> to grant privileges.
        </Text>
      </Slide>
      
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: ".9vw solid #C594C5" }}
            href="https://fga.dev"
          >
            fga.dev
          </a>
        </Subtitle>
      </Slide>

      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: ".9vw solid #C594C5" }}
            href="https://zanzibar.academy"
          >
            zanzibar.academy
          </a>
        </Subtitle>
      </Slide>

      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: ".9vw solid #C594C5" }}
            href="https://ac.sambego.tech"
          >
            ac.sambego.tech
          </a>
        </Subtitle>
      </Slide>
      <Slide style={{ background: "#C594C5" }}>
        <Subtitle
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          Thanks
        </Subtitle>
      </Slide>
    </Deck>
  );
}

export default App;
