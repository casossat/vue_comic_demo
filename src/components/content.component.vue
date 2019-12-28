<template>
  <div style="padding: 4vh 5vw;" v-if="comics.length">
    <a-modal title="Calificaciones" v-model="visible" @ok="hideModal" :footer="null">
      <div v-for="i in l_stars" :key="i">
        <comic-calification-component :star="i + 1" :total="getComicsByStar(i + 1)" />
      </div>
    </a-modal>

    <comic-paginate-component
      :title="validateComic().comic.title || validateComic().comic.safe-title"
      :hasBefore="hasBefore()"
      :nextComic="nextComic"
      :beforeComic="beforeComic"
    />
    <comic-stars-component :stars="validateComic().stars" :change-stars="changeStars" />
    <comic-view-component
      :image="validateComic().comic.img"
      :alt="validateComic().comic.alt"
      :loading="loading"
      v-if="comics.length > 0"
    />
    <a-button style="margin-top: 16px;" @click="showModal">Resumen de calificación</a-button>
    <p
      style="margin-top: 2vh; margin-bottom:5px"
    >Permanent link to this comic: https://xkcd.now.sh/?comic={{ validateComic().comic.num || '' }}</p>
    <p>Image URL: {{ validateComic().comic.img || '' }}</p>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import { CONFIG } from "../app-config";
import { IComic } from "../models/comic";
import { Vue } from "vue-property-decorator";
import { dataService } from "../services/data.service";
import ComicViewComponent from "./comic-view.component.vue";
import ComicStarsComponent from "./comic-stars.component.vue";
import ComicPaginateComponent from "./comic-paginate.component.vue";
import ComicCalificationComponent from "./comic-calification.component.vue";

interface IData {
  comic: IComic;
  stars: number;
}

export default Vue.extend({
  name: "content-component",
  data() {
    return {
      comics: [] as IData[],
      visible: false,
      loading: false,
      actual: 0,
      l_stars: _.range(5)
    };
  },
  components: {
    ComicViewComponent,
    ComicPaginateComponent,
    ComicStarsComponent,
    ComicCalificationComponent
  },
  mounted() {
    this.getComic();
  },
  methods: {
    getComicsByStar(star: number): number {
      return _.filter(this.comics, (x: IData) => x.stars === star).length;
    },
    showModal(): void {
      this.visible = true;
    },
    hideModal(): void {
      this.visible = false;
    },
    getRandomComic(): number {
      return _.random(0, 614);
    },
    changeStars(i: number): void {
      this.comics[this.actual].stars = i;
    },
    getComic(): void {
      this.loading = true;

      dataService
        .get(CONFIG.ENDPOINT.GET_COMIC_DATA + this.getRandomComic())
        .then((res: any) => {
          this.comics.push({
            comic: res.data as IComic,
            stars: 0
          });
          this.actual = this.comics.length - 1;

          setTimeout(() => {
            this.loading = false;
          }, 700);
        })
        .catch((err: string) => {
          console.log("Error: ", err);
        });
    },
    hasBefore(): boolean {
      return this.actual > 0 && this.comics.length ? true : false;
    },
    beforeComic(): void {
      if (this.hasBefore()) this.actual -= 1;
    },
    hasNext(): boolean {
      return this.actual + 1 < this.comics.length ? true : false;
    },
    nextComic(): void {
      if (this.hasNext()) this.actual += 1;
      else this.getComic();
    },
    validateComic(): IData {
      if (this.comics.length) return this.comics[this.actual];

      return { comic: {} as IComic, stars: 0 };
    }
  }
});
</script>