<template>
  <div class="page">
    <main>
      <header>
        <div class="links" :class="{ shown: showLinks }">
          <div class="menu">
            <div class="hamburger" @click="showLinks = !showLinks">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
          <div class="link-list" :class="{ hidden: loading }">
            <NuxtLink
              v-for="(link, i) in links"
              class="link"
              target="_blank"
              :style="{ '--delay': 0.08 * i + 's' }"
              :to="link.link"
              >{{ link.name }}</NuxtLink
            >
          </div>
        </div>
        <div class="welcome" v-if="showWelcome">
          <p class="letter">W</p>
          <p class="letter">E</p>
          <p class="letter">L</p>
          <p class="letter">C</p>
          <p class="letter">O</p>
          <p class="letter">M</p>
          <p class="letter">E</p>
        </div>
        <div class="about-me">
          <div class="name info">
            <img src="~/assets/me.svg" alt="noan" class="me" v-if="showImage" />
            <div class="text">
              <h1>Name’s Noan</h1>
              <h2>aka Waradu</h2>
            </div>
          </div>
          <div class="description info">
            <h1 class="profession">Developer & Designer from Switzerland</h1>
            <h2 class="details">
              I’m {{ calculateAge("2007-07-13") }} years old
            </h2>
          </div>
        </div>
      </header>
      <Section title="Made by me">
        <div class="h-scroll">
          <article class="item" v-for="project in projects">
            <NuxtLink :to="project.link" target="_blank">{{
              project.title
            }}</NuxtLink>
            <p :title="project.description">{{ project.description }}</p>
          </article>
        </div>
      </Section>
      <Section title="What I use">
        <div class="h-scroll">
          <article class="item" v-for="product in products">
            <NuxtLink :to="product.link" target="_blank">{{
              product.title
            }}</NuxtLink>
            <p :title="product.description">{{ product.description }}</p>
          </article>
        </div>
      </Section>
      <Section title="My favorite...">
        <div class="favorites">
          <b>...animes</b>
          <ul>
            <li>• Attack on Titan</li>
            <li>• Oshi no ko</li>
            <li>• Bocchi the rock</li>
            <li>• Jujutsu Kaisen</li>
            <li>• A silent Voice</li>
            <li>• Steins;Gate</li>
            <li>• Horimiya</li>
          </ul>
          <b>...games</b>
          <ul>
            <li>• Strinova</li>
            <li>• Minecraft</li>
            <li>• Celeste</li>
          </ul>
          <b>...music</b>
          <ul>
            <li>• Wanting, Getting, Wanting - DEMONDICE</li>
            <li>• Fatal - GEMN</li>
            <li>• Show - Ado</li>
            <li>• CH4NGE - Giga</li>
            <li>• Nightmare - Derivakat</li>
            <li>
              • Excuse My Rudeness, But Could You Please RIP? - Mori Calliope
            </li>
            <li>• Odo - Ado</li>
            <li>• DEAT BEATS - Mori Calliope</li>
            <li>• King - KETACHIGAI</li>
            <li>• I I I - Houshou Marine & Kobo Kanaeru</li>
            <li>• MERA MERA - Mori Calliope</li>
            <li>• Graveyard Shift - Mori Calliope</li>
            <li>• Idol - YOASOBI</li>
            <li>• MORE - K/DA</li>
            <li>• Alkatraz - DEMONDICE</li>
            <li>• BANG!! - EGOIST</li>
            <li>• Heart 111 - Yuri</li>
            <li>• Crush - Denonbu</li>
            <li>• SPECIALZ - King Gnu</li>
            <li>• Seisyun complex - Kessoku band</li>
          </ul>
        </div>
      </Section>
      <div class="tip">
        <span>Press</span>
        <span class="keys pointer" @click="shader = !shader">
          <kbd>CTRL</kbd>
          <kbd>ALT</kbd>
          <kbd>S</kbd>
        </span>
        <span>for a surprise</span>
      </div>
    </main>
    <Shader v-if="shader" />
  </div>
</template>

<script lang="ts" setup>
const showLinks = ref(false);
const loading = ref(true);
const showWelcome = ref(false);
const showImage = ref(true);
const shader = ref(false);

const keyboard = useKeyboard();

keyboard.down("x", (e) => {
  if (e.ctrlKey) {
    showWelcome.value = !showWelcome.value;
  }
});

keyboard.down("y", (e) => {
  if (e.ctrlKey) {
    showImage.value = !showImage.value;
  }
});

keyboard.down("s", (e) => {
  if (e.ctrlKey && e.altKey) {
    shader.value = !shader.value;
  }
});

interface Item {
  title: string;
  description: string;
  link: string;
}

interface Link {
  name: string;
  link: string;
}

const projects: Item[] = [
  {
    title: "A • NI • ME",
    description:
      "Helps you keep track of all the anime you’ve watched. It’s simple, fast, and easy to use.",
    link: "https://a.ni.me.waradu.dev",
  },
  {
    title: "Vleer",
    description: "Free and open source music player made by PandaDEV and me.",
    link: "https://vleer.app",
  },
  {
    title: "Epilogue",
    description:
      "We are a team of five software developers based in Switzerland.",
    link: "https://epilogue.team",
  },
  {
    title: "Eggcellent",
    description:
      "Lets you search, controll and manage your bookmarks, history, extensions, and tabs.",
    link: "https://egg.waradu.dev",
  },
  {
    title: "Database",
    description:
      "Collection of tutorials or blog posts about things I like or had problems with.",
    link: "https://database.waradu.dev",
  },
];

const products: Item[] = [
  {
    title: "Figma",
    description: "I love designing and figma makes this easy for me.",
    link: "https://figma.com",
  },
  {
    title: "Arc / Zen",
    description: "A gorgeous and good browser’s all I need.",
    link: "https://arc.net",
  },
  {
    title: "Apple Products",
    description: "Yes I love Apple and you ain’t changing my mind.",
    link: "https://apple.com",
  },
  {
    title: "VScode / Jetbrain",
    description: "I would not be the person I am today without these",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Bitwarden",
    description: "Not much to say, it’s just great",
    link: "https://bitwarden.com",
  },
  {
    title: "Discord",
    description: "Hit me up if you want @waradu",
    link: "https://discord.com",
  },
];

const links: Link[] = [
  {
    name: "Youtube",
    link: "https://youtube.com/@waradu",
  },
  {
    name: "Github",
    link: "https://github.com/waradu",
  },
  {
    name: "Discord",
    link: "https://discord.gg/yG2zF7yDfk",
  },
  {
    name: "Email",
    link: "mailto:me@waradu.dev",
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/Waradu",
  },
];

onMounted(() => {
  loading.value = false;
});

const calculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  main {
    display: flex;
    width: 100%;
    height: max-content;
    padding-top: 60px;
    padding-bottom: 60px;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    header {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;
      align-items: center;

      .links {
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .menu {
          width: 100%;
          max-width: 800px;
          padding-inline: 40px;

          .hamburger {
            display: flex;
            width: 20px;
            flex-direction: column;
            gap: 3px;
            cursor: url("~/assets/cursor_pointer.png"), auto;
          }

          .line {
            background-color: #000000aa;
            height: 1.5px;
            width: 100%;
          }
        }

        .link-list {
          height: 0px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: height 0.2s ease-in-out;
          overflow: auto;
          padding-left: calc(-360px + 50vw);
          padding-right: calc(-360px + 50vw);
          width: 100%;
          position: relative;

          .link {
            translate: 0 -20px;
            filter: blur(5px);
            opacity: 0;
            color: black;
            text-decoration-color: transparent;
            animation: hide 0.2s ease-in-out 0s alternate 1 forwards;
            transition: 0.2s ease-in-out;

            &:hover {
              color: black;
              text-decoration-color: black;
            }
          }

          &.hidden {
            opacity: 0;
          }
        }

        &.shown {
          .link-list {
            height: 30px;

            .link {
              animation: from-top 0.2s ease-in-out var(--delay, 0s) alternate 1
                forwards;
            }
          }
        }
      }

      .welcome {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 800px;
        padding-inline: 40px;

        .letter {
          font-size: 36px;
        }
      }

      .about-me {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        max-width: 800px;
        padding-inline: 40px;

        .description {
          display: flex;
          flex-direction: column;
          align-items: end;

          h1 {
            font-size: 24px;
            width: max-content;
            text-align: end;
          }

          h2 {
            color: rgba(0, 0, 0, 0.8);
            font-size: 12px;
            width: max-content;
            text-align: end;
          }

          &.description {
            text-align: end;
          }
        }

        .name {
          display: flex;
          gap: 10px;
          position: relative;

          h1 {
            font-size: 24px;
            width: max-content;
          }

          h2 {
            color: rgba(0, 0, 0, 0.8);
            font-size: 12px;
            width: max-content;
          }

          .me {
            position: absolute;
            top: 50%;
            height: 70px;
            translate: -90px -50%;
          }

          .text {
            display: flex;
            flex-direction: column;
          }

          &.description {
            text-align: end;
          }
        }
      }
    }

    #made-by-me,
    #what-i-use {
      .h-scroll {
        overflow: auto;
        padding-left: calc(-360px + 50vw);
        padding-right: calc(-360px + 50vw);
        width: 100%;
        position: relative;
        display: flex;
        gap: 40px;

        &::after {
          content: "";
          display: block;
          position: fixed;
          height: 100%;
          width: 40px;
          right: 0;
          top: 0;
          background-image: linear-gradient(to right, transparent, #e8dfd7 80%);
          pointer-events: none;
        }

        &::before {
          content: "";
          display: block;
          position: fixed;
          height: 100%;
          width: 40px;
          left: 0;
          top: 0;
          background-image: linear-gradient(to left, transparent, #e8dfd7 80%);
          pointer-events: none;
        }

        .item {
          display: flex;
          width: 100%;
          max-width: 250px;
          min-width: 250px;
          flex-direction: column;
          gap: 5px;

          a {
            color: #000;
            text-overflow: ellipsis;
            width: 100%;
            max-width: max-content;
            overflow: hidden;
            font-size: 16px;
            text-decoration-color: transparent;
            transition: 0.2s ease-in-out;
            white-space: nowrap;
            font-weight: 700;

            &:hover {
              text-decoration-color: #00000080 !important;
            }
          }

          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            align-self: stretch;
            text-overflow: ellipsis;
            font-size: 14px;
          }
        }
      }
    }

    #what-i-use {
      .item {
        min-width: 150px !important;
        max-width: 150px !important;
      }
    }

    .favorites {
      width: 100%;
      max-width: 800px;
      padding-inline: 40px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      b {
        font-size: 14px;
      }

      ul {
        list-style: none;
        font-size: 16px;
        margin-bottom: 20px;
        margin-left: 10px;
        width: max-content;

        li {
          width: max-content;
        }
      }
    }

    .tip {
      display: flex;
      align-items: center;
      gap: 15px;
      color: #000000aa;

      .keys {
        user-select: none;
        display: flex;
        gap: 10px;
      }

      kbd {
        padding: 6px;
        padding-inline: 12px;
        background-color: #ffffff80;
        border-radius: 12px;
      }
    }
  }
}

@keyframes from-top {
  from {
    translate: 0 -20px;
    filter: blur(5px);
    opacity: 0;
  }

  to {
    translate: 0 0px;
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes hide {
  from {
    translate: 0 0px;
    filter: blur(0px);
    opacity: 1;
  }

  to {
    translate: 0 5px;
    filter: blur(5px);
    opacity: 0;
  }
}

@media (max-width: 800px) {
  .page {
    main {
      padding-top: 40px;
      padding-bottom: 40px;

      header {
        .about-me {
          flex-direction: column;

          .info {
            &.description {
              text-align: start;
              align-items: start;
            }

            &.name {
              flex-direction: column;
              align-items: start;

              .me {
                position: relative;
                top: unset;
                translate: 0 0;
              }
            }
          }
        }
      }

      #made-by-me,
      #what-i-use {
        .h-scroll {
          padding-left: 40px;
          padding-right: 40px;
        }
      }

      .link-list {
        padding-left: 40px !important;
        padding-right: 40px !important;
      }
    }
  }
}
</style>
