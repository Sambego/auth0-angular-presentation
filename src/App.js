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
  Code
} from "@sambego/diorama";
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-typescript.min.js';

import Nemo from "./video/nemo.mp4";
import NPM from "./video/npm.mp4";
import cc from "./img/cc.svg";
import Sam from "./img/sam.png";

import Flow1 from "./img/flow-1.svg";
import Flow2 from "./img/flow-2.svg";
import Flow3 from "./img/flow-3.svg";
import Flow4 from "./img/flow-4.svg";
import Flow5 from "./img/flow-5.svg";
import Flow6 from "./img/flow-6.svg";
import Flow7 from "./img/flow-7.svg";
import Flow8 from "./img/flow-8.svg";


const accent = '#EC5f67';
function App() {
  return (
    <Deck
      footer={
        <Footer
          left={<Highlight color={accent}>@sambego</Highlight>}
          right={<Highlight color={accent}>ng.sambego.tech</Highlight>}
        />
      }
    >
      <Slide style={{ background: `${accent}`, color: "#fff" }}>
        <Video
          src={Nemo}
          loop
          autoplay
          full
          color={accent}
          style={{ overflow: "hidden", zIndex: 1 }}
        />
        <Title style={{ 
          color: "#ffffff", 
          position: "relative", 
          zIndex: 1,
          textShadow: `-4px -4px 0 ${accent},4px -4px 0 ${accent},-4px 4px 0 ${accent},4px 4px 0 ${accent}`,
        }}>
          Protecting your Angular apps with <Highlight color={accent}>Auth0</Highlight>!
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
            <Image src={Sam} alt="A picture of me" full color={accent} />
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
      <Slide>
        <video src={NPM} autoPlay style={{ height: "80vh" }}></video>
        <Text>
          <span style={{ fontFamily: "monospace" }}>npx @sambego/about-me</span>
        </Text>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${accent}` }}
            href="https://ng.sambego.tech"
          >
            ng.sambego.tech
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>Summary</Subtitle>
        <List>
          <li>OpenID Connect</li>
          <li>Authorization Code with PKCE Flow</li>
          <li>Auth0 x Angular</li>
        </List>
      </Slide>

      <Slide style={{ background: `${accent}` }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: ".9vw solid #000"}}>OpenID</span> Connect
        </Title>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={accent}>OpenID Connect (OIDC)</Highlight> was created as an identity layer for <Highlight color={accent}>OAuth 2.0</Highlight> because, while OAuth provides a <Highlight color={accent}>solid standard for user Authentication</Highlight>, developers needed a standard way of expressing <Highlight color={accent}>user identity</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          OIDC uses the <Highlight color={accent}>same flows</Highlight> as OAuth 2.0 does.
        </Text>
      </Slide>



      <Slide style={{ background: `${accent}` }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: ".9vw solid #000"}}>PKCE</span> flow
        </Title>
      </Slide>
      <Slide>
        <Text>
          Authorization Code with <Highlight color={accent}>P</Highlight>roof <Highlight color={accent}>K</Highlight>ey for <Highlight color={accent}>C</Highlight>ode <Highlight color={accent}>E</Highlight>xchange flow.
        </Text>
      </Slide>
      <Slide>
        <Image
            contain
            src={Flow1}
            alt="Authorization Code with PKCE Flow detail 1"
          />
      </Slide>
      <Slide>
        <Image
            contain
            src={Flow2}
            alt="Authorization Code with PKCE Flow detail 2"
          />
      </Slide>
      <Slide>
        <Image
            contain
            src={Flow3}
            alt="Authorization Code with PKCE Flow detail 3"
          />
      </Slide>
      <Slide>
        <Image
            contain
            src={Flow4}
            alt="Authorization Code with PKCE Flow detail 4"
          />
      </Slide>
      <Slide>
        <Image
            contain
            src={Flow5}
            alt="Authorization Code with PKCE Flow detail 5"
          />
      </Slide>
      <Slide>
        <Image
            contain
            src={Flow6}
            alt="Authorization Code with PKCE Flow detail 6"
          />
      </Slide>
      <Slide>
        <Image
            contain
            src={Flow7}
            alt="Authorization Code with PKCE Flow detail 7"
          />
      </Slide>
      <Slide>
        <Image
            contain
            src={Flow8}
            alt="Authorization Code with PKCE Flow detail 8"
          />
      </Slide>
      <Slide style={{ background: `${accent}` }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1, fontSize: "14rem" }}
        >
          <span style={{borderBottom: ".9vw solid #000"}}>Auth0</span> x Angular
        </Title>
      </Slide>
      <Slide>
        <Subtitle>Setup</Subtitle>
      </Slide>
      <Slide>
        <Code code="ng add @auth0/auth0-angular" lang="bash"/>
      </Slide>
      <Slide>
        <Code code={`{
  "domain":"XYZ.eu.auth0.com",
  "clientID": "abc123"
}`} lang="typescript"/>
      <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>auth_config.json</Text>
    </Slide>
    <Slide>
      <Code code={`import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
  }
};`} lang="typescript"/>
    <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>src/environments/environment.ts</Text>
  </Slide>
  <Slide>
    <Code code={`...
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  bootstrap: [AppComponent],
})`} lang="typescript"/>
    <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>src/app/app.module.ts</Text>
  </Slide>
  <Slide>
    <Subtitle>Login</Subtitle>
  </Slide>
  <Slide>
    <Code code={`import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
})
export class LoginButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}`} lang="typescript"/>
    <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>src/app/components/login-button/login-button.component.ts</Text>
  </Slide>
  <Slide>
        <Code code={`<button 
  class="btn btn-primary btn-block" 
  (click)="loginWithRedirect()"
>
  Log in
</button>`} lang="html"/>
    <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>src/app/components/login-button/login-button.component.html</Text>
  </Slide>
  <Slide>
      <Code code={`<nav class="nav-container">
  <div class="navbar-brand logo"></div>
  <app-main-nav></app-main-nav>
  
  <app-login-button 
    *ngIf="(auth.isAuthenticated$ | async) === false"
  ></app-login-button>
</nav>`} lang="html"/>
    <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>src/app/components/nav-bar/nav-bar.component.html</Text>
  </Slide>
  <Slide>
    <Code code={`import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public auth: AuthService) {}
}`} lang="typescript"/>
    <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>src/app/components/nav-bar/nav-bar.component.ts</Text>
  </Slide>
  <Slide>
    <Subtitle>Logout</Subtitle>
  </Slide>
  <Slide>
    <Code code={`import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
})
export class LogoutButtonComponent implements OnInit {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}
  
  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}`} lang="typescript"/>
    <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>src/app/components/logout-button/logout-button.component.ts</Text>
  </Slide>
  <Slide>
      <Code code={`<button 
  class="btn btn-danger btn-block" 
  (click)="logout()"
>
  Log out
</button>
`} lang="html"/>
    <Text style={{fontSize: '4rem', fontFamily: 'monospace'}}>src/app/components/logout-button/logout-button.component.html</Text>
  </Slide>
      <Slide><Subtitle><Highlight color={accent}>Demo</Highlight> time!</Subtitle></Slide>
      <Slide style={{ background: `${accent}` }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1, fontSize: "14rem" }}
        >
          Let's <span style={{borderBottom: ".9vw solid #000"}}>recap</span> 
        </Title>
      </Slide>
      <Slide><Subtitle>OpenID Connect is Oauth 2.0 with an <Highlight color={accent}>identity layer on top</Highlight>.</Subtitle></Slide>
      <Slide><Subtitle>Single page apps use the <Highlight color={accent}>authorization code with pkce</Highlight> flow.</Subtitle></Slide>
      <Slide><Subtitle>Implementing authentication with Auth0 <Highlight color={accent}>takes just a few minutes</Highlight>.</Subtitle></Slide>

      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${accent}` }}
            href="https://ng.sambego.tech"
          >
            ng.sambego.tech
          </a>
        </Subtitle>
      </Slide>
      <Slide style={{ background:`${accent}` }}>
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
