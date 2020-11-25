import { Component, Vue, Watch } from 'vue-property-decorator';
import MermaidCard from '@/components/MermaidCard';
import MermaidButton from '@/components/MermaidButton';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import { FooterItem } from '@/model/FooterItem';
import { AboutItem } from '@/model/AboutItem';
import { GET, INFO } from '@/config/api.config';
import { TeamItem } from '@/model/TeamItem';

@Component({
  components: {
    'admin-title': AdminWrapTitle,
    'm-card': MermaidCard,
    'm-button': MermaidButton
  }
})
export default class AdminSetting extends Vue {
  private aboutData: AboutItem = { introduct: {} };
  private footerData: FooterItem = {};
  private teamData: TeamItem[] = [];

  private async mounted() {
    const aboutRes = await GET(`${INFO}/about`);
    const footerRes = await GET(`${INFO}/footer`);
    const teamRes = await GET(`${INFO}/team`);
    this.aboutData = aboutRes.result[0];
    this.footerData = footerRes.result[0];
    console.log(teamRes);
    console.log('Setting Loaded');
  }

  @Watch('aboutData')
  getData(newVal: AboutItem) {
    this.aboutData = newVal;
  }

  private render() {
    return (
      <div class="admin__setting">
        <admin-title title="Setting"></admin-title>
        <div class="admin__setting--wrap">
          <section class="content">
            <m-card title="About Introduct Setting">
              <section class="admin__setting--form">
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">Background</p>
                  <input
                    class="mermaid__input--form"
                    type="text"
                    v-model={this.aboutData.background}
                  />
                </section>
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">Image</p>
                  <input
                    class="mermaid__input--form"
                    type="text"
                    v-model={this.aboutData.introduct.image}
                  />
                </section>
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">Title</p>
                  <textarea
                    class="mermaid__input--form"
                    rows="4"
                    v-model={this.aboutData.introduct.title}
                  ></textarea>
                </section>
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">Concept</p>
                  <textarea
                    class="mermaid__input--form"
                    rows="10"
                    v-model={this.aboutData.introduct.content}
                  ></textarea>
                </section>
              </section>
              <section class="admin__setting--submit">
                <m-button>保存</m-button>
              </section>
            </m-card>
            <m-card title="About Team Setting">
              <section class="admin__setting--form">
                <section class="mermaid__input single-grid team-setting">
                  <input
                    class="mermaid__input--form"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    class="mermaid__input--form"
                    type="text"
                    placeholder="Icon"
                  />
                  <input
                    class="mermaid__input--form"
                    type="text"
                    placeholder="Link"
                  />
                  <textarea
                    class="mermaid__input--form contact"
                    rows="10"
                    placeholder="Contact"
                  ></textarea>
                </section>
              </section>
              <section class="admin__setting--submit">
                <m-button>保存</m-button>
                <m-button>增加</m-button>
              </section>
            </m-card>
            <m-card title="Footer">
              <section class="admin__setting--form">
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">logo</p>
                  <input class="mermaid__input--form" type="text" />
                </section>
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">start year</p>
                  <input class="mermaid__input--form" type="text" />
                </section>
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">author</p>
                  <input class="mermaid__input--form" type="text" />
                </section>
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">website</p>
                  <input class="mermaid__input--form" type="text" />
                </section>
              </section>
              <section class="admin__setting--submit">
                <m-button>保存</m-button>
              </section>
            </m-card>
            <m-card title="Footer Contact Setting">
              <section class="admin__setting--form">
                <article class="contact-item">
                  <section class="mermaid__input single-grid">
                    <p class="mermaid__input--title">Icon</p>
                    <input class="mermaid__input--form" type="text" />
                  </section>
                  <section class="mermaid__input single-grid">
                    <p class="mermaid__input--title">Name</p>
                    <input class="mermaid__input--form" type="text" />
                  </section>
                  <section class="mermaid__input single-grid link">
                    <p class="mermaid__input--title">Link</p>
                    <input class="mermaid__input--form" type="text" />
                  </section>
                </article>
              </section>
              <section class="admin__setting--submit">
                <m-button>保存</m-button>
                <m-button>增加</m-button>
              </section>
            </m-card>
            <m-card title="System Setting">
              <section class="admin__setting--form">
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">Username</p>
                  <input class="mermaid__input--form" type="text" />
                </section>
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">Password</p>
                  <input class="mermaid__input--form" type="text" />
                </section>
                <section class="mermaid__input single-grid">
                  <p class="mermaid__input--title">New Password</p>
                  <input class="mermaid__input--form" type="text" />
                </section>
              </section>
              <section class="admin__setting--submit">
                <m-button>保存</m-button>
              </section>
            </m-card>
          </section>
        </div>
      </div>
    );
  }
}
