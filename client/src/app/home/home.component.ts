import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Products, Product } from '../shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  shortProducts: any[] = [];
  productsToShow: any[] = [];
  categories: any[] = [
    {
      name: 'Pesticides',
    },
    {
      name: 'Fertilizers',
    },
    {
      name: 'Seeds',
    },
    {
      name: 'Equipments',
    },
  ];
  loading = false;
  productPageCounter = 1;
  additionalLoading = false;
  allProductsShow = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  public screenWidth: any;
  public screenHeight: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
 /*   this.loading = true;
    setTimeout(() => {
      this.productService.getAllProducts(9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = res;
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }, 500);*/
    this.products = [
        {
          "id": 1,
          "title": "Isabian",
          "image": "https://www.syngenta.com.pk/sites/g/files/zhg211/f/media-wysiwyg/2021/06/03/isabion-3d-bottle-500ml_product-pack.jpg",
          "images": "https://www.syngenta.com.pk/sites/g/files/zhg211/f/media-wysiwyg/2021/05/25/ampligo-160grm-bottle-product-pack-.jpg;https://innspubnet.files.wordpress.com/2018/11/pesticides.jpg?w=1024;https://www.syngenta.com.pk/sites/g/files/zhg211/f/media-wysiwyg/2021/05/26/polo-3d-bottle-1l_product-pack.jpg" ,
          "description": "Polo provides powerful control against aphids and whiteflies. AMPLIGO 150 ZC contains ZEON technology Active ingredients 150g/litre." ,
          "price": 64.99,
          "quantity": 5,
          "short_desc": "Isabian",
          "cat_id": 1
        },
        {
          "id": 2,
          "title": "",
          "image": "https://www.kissanghar.pk/assets/img/product/43061720210702654.jpg",
          "images": "https://www.kissanghar.pk/assets/img/product/06411420211207676.jpg;https://www.kissanghar.pk/assets/img/product/43061720210702366.jpg;https://www.kissanghar.pk/assets/img/product/56401420211207802.jpg" ,
          "description": "FMC Product: connect is a very effective premix herbicide for control of annual broadleaf & grasses weeds in fieldcorn, seed corn, yellow popcorn, sweet corn and sugarcane." ,
          "price": 120.99,
          "quantity": 15,
          "short_desc": "Connect",
          "cat_id": 1
        },
        {
          "id": 3,
          "title": "Council Active",
          "image": "https://www.kissanghar.pk/assets/img/product/24201920220428376.jpg",
          "images": "https://www.kissanghar.pk/assets/img/product/52301220220508243.jpg;https://www.kissanghar.pk/assets/img/product/05311220220508235.jpg;https://www.kissanghar.pk/assets/img/product/24201920220428695.jpg" ,
          "description": "Bayer Product:the council activ 75gm triafamone 20% + ethoxysulfuron 10% wg rice herbicide bayer crop science council active is a product of bayer. the category is pesticides and subcategory is weedicides / herbicide" ,
          "price": 115.84,
          "quantity": 10,
          "short_desc": "Council Active",
          "cat_id": 1
        },
        {
          "id": 4,
          "title": "Topsin-m",
          "image": "https://www.kissanghar.pk/assets/img/product/58221320210822235.jpg",
          "images": "the topsin-m 70 wp thiophanate methyl 400gm arysta life science upl pakistan is a product of arysta. the category is pesticides and subcategory is fungicides;https://wendell-trading.com/wp-content/uploads/Topsin-M_0886.jpg" ,
          "description": "the topsin-m 70 wp thiophanate methyl 400gm arysta life science upl pakistan is a product of arysta. the category is pesticides and subcategory is fungicides" ,
          "price": 38.40,
          "quantity": 10,
          "short_desc": "Topsin",
          "cat_id": 1
        },
        {
          "id": 5,
          "title": "Sona Urea,DAP",
          "image": "https://previews.123rf.com/images/designofire/designofire1812/designofire181202049/113594903-fertiliizer-vector-icon-sign-icon-vector-illustration-for-personal-and-commercial-use-clean-look-tre.jpg",
          "images": "http://i1.tribune.com.pk/wp-content/uploads/2012/07/413018-fauji-1343247398.jpg;https://www.ffbl.com/wp-content/uploads/2022/01/DAP_shadowed.png;http://www.pakpedia.pk/files/Image/jpg/full/3498f24510415627108fbf1b7dd76689.x76876.jpg" ,
          "description": "Sona Urea is the most concentrated solid, straight nitrogenous and most widely used fertilizer in the country. DAP contains the second most important nutrient element i.e. Phosphorous besides Nitrogen" ,
          "price": 40.50,
          "quantity": 10,
          "short_desc": "Sona Urea,DAP",
          "cat_id": 2
        },
        {
          "id": 6,
          "title": "Engro NP Plus",
          "image": "https://newsupdatetimes.com/wp-content/uploads/2016/10/top2.jpg",
          "images": "https://www.engrofertilizers.com/images/uploads/Engro_NP_Plus.png;https://www.engrofertilizers.com/images/uploads/Engro_DAP.png;https://www.engrofertilizers.com/images/uploads/Engro_MOP.png" ,
          "description": "Engro NP Plus is an innovative formulation that contains Nitrogen and Phosphorus in equal proportions (18:18) providing balanced growth in terms of crop health and productivity. In addition to potash based blended fertilizer, Potassium can also be applied in the form of straight fertilizer out of which, one widely used potassium fertilizer is Engro Muriate of Potash (MOP)." ,
          "price": 52.40,
          "quantity": 10,
          "short_desc": "NP Plus",
          "cat_id": 2
        },
        {
          "id": 7,
          "title": "Nitrophos Sarsabz",
          "image": "https://www.kissanghar.pk/assets/img/product/21171920220204566.jpg",
          "images": "https://i0.wp.com/agrinfobank.com.pk/wp-content/uploads/2019/01/Urea.jpg?w=305&ssl=1;https://i0.wp.com/agrinfobank.com.pk/wp-content/uploads/2019/01/Sarsabz-Di-Ammonium-Phosphate-DAP.jpg?w=305&ssl=1;https://i0.wp.com/agrinfobank.com.pk/wp-content/uploads/2019/01/Sarsabz-Calcium-Ammonium-Nitrate.jpg?w=305&ssl=1" ,
          "description": "the nitrophos nitro phos sarsabz np 50kg fatima fertilizer nitrogen 22% phosphorus 20% is a product of fatima fertilizer ( sarsabz ). the category is fertilizers and subcategory is basic fertilizers" ,
          "price": 45.25,
          "quantity": 10,
          "short_desc": "Nitrophos np",
          "cat_id": 2
        },
        {
          "id": 8,
          "title": "Ultrasol SOP",
          "image": "https://www.kissanghar.pk/assets/img/product/59201520220421874.jpg",
          "images": "https://www.kissanghar.pk/assets/img/product/38341420220313736.jpg;https://www.kissanghar.pk/assets/img/product/54301620220130487.jpg;https://www.kissanghar.pk/assets/img/product/31561620220527424.jpg" ,
          "description": "the ultrasol sop 25kg 0 0 51 18(s) potassium sulphate crystals swat agro chemicals sqm taiwan ultra sol potash is a product of swat agro chemicals. the category is fertilizers and subcategory is imported fertilizer." ,
          "price": 48.40,
          "quantity": 10,
          "short_desc": "ultrasol sop 25kg",
          "cat_id": 2
        },
        {
          "id": 9,
          "title": "Kissan Basmati",
          "image": "https://www.kissanghar.pk/assets/img/product/15111320210523195.jpg",
          "images": "https://www.kissanghar.pk/assets/img/product/15111320210523195.jpg;https://greenworks.pk/wp-content/uploads/2020/12/hybrid-rice.png;https://www.kissanghar.pk/assets/img/product/15111320210523195.jpg" ,
          "description": "the kissan basmati 20kg fmc paddy seed 1509 is a product of fmc. the category is seeds and subcategory is rice crop" ,
          "price": 55.99,
          "quantity": 10,
          "short_desc": "Kissan Basmati 20kg Fmc Paddy Seed 1509",
          "cat_id": 3
        },
        {
          "id": 10,
          "title": "Ckc 3",
          "image": "https://www.kissanghar.pk/assets/img/product/43451720220204577.jpg",
          "images": "https://www.kissanghar.pk/assets/img/product/43451720220204314.jpg;https://www.isaaa.org/kc/cropbiotechupdate/files/images/172020113113PM.jpg;https://blog.cabi.org/wp-content/uploads/sites/5/2020/01/Cotton-Seed-Sowing-1536x864.jpeg" ,
          "description": "New variety,the ckc 3 cotton seed (triple gene) cultivation|| pink free cotton seed 5kg || bilal agro seed corporation kappas beej kapas ka beej is a product of bilal agro seed corporation. the category is seeds and subcategory is cotton seeds" ,
          "price": 78.20,
          "quantity": 10,
          "short_desc": "Ckc3 cooton seed",
          "cat_id": 3
        },
        {
          "id": 11,
          "title": "C-9091 Hybrid",
          "image": "https://www.kissanghar.pk/assets/img/product/36391820220202684.jpg",
          "images": "https://www.kissanghar.pk/assets/img/product/36391820220202287.jpg;https://www.kissanghar.pk/assets/img/product/36391820220202620.jpg;https://thumbs.dreamstime.com/z/monsanto-gmo-corn-field-farm-crop-desert-41701479.jpg" ,
          "description": "" ,
          "price": 66.50,
          "quantity": 10,
          "short_desc": "C-9091 Hybrid Corn Seed 10kg FMC Product, Baharia Makai Spring Corn",
          "cat_id": 3
        },
        {
          "id": 12,
          "title": "Akbar Ghazi Fsd 08",
          "image": "https://www.kissanghar.pk/assets/img/product/40272120211014344.jpg",
          "images": "https://www.kissanghar.pk/assets/img/product/40272120211014566.jpg;https://www.kissanghar.pk/assets/img/product/40272120211014647.jpg;https://www.kissanghar.pk/assets/img/product/40272120211014344.jpg" ,
          "description": "the fmc wheat seed 50kg fmc ( akbar ghazi fakhre bakker fsd 08 ) is a product of fmc. the category is seeds and subcategory is wheat seeds" ,
          "price": 70.45,
          "quantity": 10,
          "short_desc": "Fmc Wheat Seed 50kg Fmc ( Akbar Ghazi Fakhre Bakker Fsd 08 )",
          "cat_id": 3
        },
        {
          "id": 13,
          "title": "Rotavator / Rotary Tiller",
          "image": "https://tractors-zainbm43b.netdna-ssl.com/wp-content/uploads/2018/04/rotavator-price-in-pakistan.jpg",
          "images": "https://www.hamdardagro.com/Content/Products/ProductImages/1704/Rotavator1.jpg;https://www.agriwheels.com/storage/files/pk/17/thumb-816x460-20cbc1e013852d9e33a8c0fdbc614b71.jpg;https://1.bp.blogspot.com/_FbjRC7a6P1s/TSISATUY30I/AAAAAAAAABU/LAF4omzU7js/s400/green_rotavator.jpg" ,
          "description": "Several different types of Rotavator or rotary tiller are available for varying field conditions. The use of Rotavator is becoming more and more popular in rice and cotton growing areas to till stubble field of rice, sugarcane, cotton and corn.This is available in 36,42,48,56 and 60 tines." ,
          "price": 315.40,
          "quantity": 30,
          "short_desc": "Rotavator",
          "cat_id": 4
        },
        {
          "id": 14,
          "title": "Laser Land Laveller",
          "image": "https://www.fieldking.com/images/landscaping/leveler/lg/eco-planer-laser-guided-land-leveler.png",
          "images": "https://www.agriwheels.com/storage/files/pk/104/thumb-816x460-e7a5e086007c82f03479eb13401948f7.jpg;https://tractors-zainbm43b.netdna-ssl.com/wp-content/uploads/2018/11/laser-land-leveler-price-680x350.jpg;https://machineonline.pk/momedia/2021/01/Untitled-design-2022-01-04T144610.339.png" ,
          "description": "Laser land leveller: Hassle-free, reliable, effective & easy to operate power mast which saves both time & energy. More uniform moisture environment for crops. Reduced consumption of seeds, fertilizers, chemical and fuel." ,
          "price": 290.55,
          "quantity": 10,
          "short_desc": "Eco Planer Laser Guided Land Leveler",
          "cat_id": 4
        },
        {
          "id": 15,
          "title": "Cultivator",
          "image": "https://tractors-zainbm43b.netdna-ssl.com/wp-content/uploads/2018/11/cultivator-price.jpg",
          "images": "https://images.netdirector.co.uk/gforces-auto/image/upload/w_377,h_251,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/447afad9373ea7625d58082b1fc22d92/cultivator.jpg;https://malikagroindustries.com/wp-content/uploads/2020/03/spring-tine-cultivator-250x250-1.jpg;https://sc04.alicdn.com/kf/HTB1sCL8X0fvK1RjSspoq6zfNpXaj.jpg" ,
          "description": "Ideal for general cultivating, weeding, pasture renovating and preparation of seed beds for different crops. The tiller is fully mounted on tractor by means of category I & II with 3 point linkage.The spring loaded tines swing back under breakaway pressure, pass over the obstruction and return to the working position without affecting the depth of the implement." ,
          "price": 375.00,
          "quantity": 10,
          "short_desc": "Cultivator 9 Tines",
          "cat_id": 4
        },
        {
          "id": 16,
          "title": "Wheat Thresher Machine",
          "image": "https://www.sethtufail.com/image/sethtufailimages/THRESHER.webp",
          "images": "https://www.sethtufail.com/image/sethtufailimages/wheatthresher.webp;https://tractors-zainbm43b.netdna-ssl.com/wp-content/uploads/2018/12/Wheat-Thresher-Machine-in-Pakistan.jpg;https://www.sethtufail.com/image/sethtufailimages/wheatthresherr.webp" ,
          "description": "Wheat Thresher is a machine or device that first separates the head of a stalk of grain from the straw, and then further separates the essential part from the rest of the head.Thresher, farm machine for separating wheat, peas, soybeans, and other small grain and seed crops from their chaff and straw. Primitive threshing methods involved beating by hand with a flail or trampling by animal hooves." ,
          "price": 450.40,
          "quantity": 10,
          "short_desc": "Wheat Thresher Machine",
          "cat_id": 4
        }
    ];
    this.shortProducts =  [
      {
        "id": 1,
        "title": "Isabian",
        "image": "https://www.syngenta.com.pk/sites/g/files/zhg211/f/media-wysiwyg/2021/06/03/isabion-3d-bottle-500ml_product-pack.jpg",
        "images": "https://www.syngenta.com.pk/sites/g/files/zhg211/f/media-wysiwyg/2021/05/25/ampligo-160grm-bottle-product-pack-.jpg;https://innspubnet.files.wordpress.com/2018/11/pesticides.jpg?w=1024;https://www.syngenta.com.pk/sites/g/files/zhg211/f/media-wysiwyg/2021/05/26/polo-3d-bottle-1l_product-pack.jpg" ,
        "description": "Polo provides powerful control against aphids and whiteflies. AMPLIGO 150 ZC contains ZEON technology Active ingredients 150g/litre." ,
        "price": 64.99,
        "quantity": 5,
        "short_desc": "Isabian",
        "cat_id": 1
      },
      {
        "id": 2,
        "title": "",
        "image": "https://www.kissanghar.pk/assets/img/product/43061720210702654.jpg",
        "images": "https://www.kissanghar.pk/assets/img/product/06411420211207676.jpg;https://www.kissanghar.pk/assets/img/product/43061720210702366.jpg;https://www.kissanghar.pk/assets/img/product/56401420211207802.jpg" ,
        "description": "FMC Product: connect is a very effective premix herbicide for control of annual broadleaf & grasses weeds in fieldcorn, seed corn, yellow popcorn, sweet corn and sugarcane." ,
        "price": 120.99,
        "quantity": 15,
        "short_desc": "Connect",
        "cat_id": 1
      },
      {
        "id": 3,
        "title": "Council Active",
        "image": "https://www.kissanghar.pk/assets/img/product/24201920220428376.jpg",
        "images": "https://www.kissanghar.pk/assets/img/product/52301220220508243.jpg;https://www.kissanghar.pk/assets/img/product/05311220220508235.jpg;https://www.kissanghar.pk/assets/img/product/24201920220428695.jpg" ,
        "description": "Bayer Product:the council activ 75gm triafamone 20% + ethoxysulfuron 10% wg rice herbicide bayer crop science council active is a product of bayer. the category is pesticides and subcategory is weedicides / herbicide" ,
        "price": 115.84,
        "quantity": 10,
        "short_desc": "Council Active",
        "cat_id": 1
      },
      {
        "id": 4,
        "title": "Topsin-m",
        "image": "https://www.kissanghar.pk/assets/img/product/58221320210822235.jpg",
        "images": "the topsin-m 70 wp thiophanate methyl 400gm arysta life science upl pakistan is a product of arysta. the category is pesticides and subcategory is fungicides;https://wendell-trading.com/wp-content/uploads/Topsin-M_0886.jpg" ,
        "description": "the topsin-m 70 wp thiophanate methyl 400gm arysta life science upl pakistan is a product of arysta. the category is pesticides and subcategory is fungicides" ,
        "price": 38.40,
        "quantity": 10,
        "short_desc": "Topsin",
        "cat_id": 1
      },
      {
        "id": 5,
        "title": "Sona Urea,DAP",
        "image": "https://previews.123rf.com/images/designofire/designofire1812/designofire181202049/113594903-fertiliizer-vector-icon-sign-icon-vector-illustration-for-personal-and-commercial-use-clean-look-tre.jpg",
        "images": "http://i1.tribune.com.pk/wp-content/uploads/2012/07/413018-fauji-1343247398.jpg;https://www.ffbl.com/wp-content/uploads/2022/01/DAP_shadowed.png;http://www.pakpedia.pk/files/Image/jpg/full/3498f24510415627108fbf1b7dd76689.x76876.jpg" ,
        "description": "Sona Urea is the most concentrated solid, straight nitrogenous and most widely used fertilizer in the country. DAP contains the second most important nutrient element i.e. Phosphorous besides Nitrogen" ,
        "price": 40.50,
        "quantity": 10,
        "short_desc": "Sona Urea,DAP",
        "cat_id": 2
      },
      {
        "id": 6,
        "title": "Engro NP Plus",
        "image": "https://newsupdatetimes.com/wp-content/uploads/2016/10/top2.jpg",
        "images": "https://www.engrofertilizers.com/images/uploads/Engro_NP_Plus.png;https://www.engrofertilizers.com/images/uploads/Engro_DAP.png;https://www.engrofertilizers.com/images/uploads/Engro_MOP.png" ,
        "description": "Engro NP Plus is an innovative formulation that contains Nitrogen and Phosphorus in equal proportions (18:18) providing balanced growth in terms of crop health and productivity. In addition to potash based blended fertilizer, Potassium can also be applied in the form of straight fertilizer out of which, one widely used potassium fertilizer is Engro Muriate of Potash (MOP)." ,
        "price": 52.40,
        "quantity": 10,
        "short_desc": "NP Plus",
        "cat_id": 2
      }
    ];
    this.productsToShow = this.shortProducts;
  }

  showMoreProducts(): void {
    this.additionalLoading = true;
    this.productPageCounter = this.productPageCounter + 1;
    this.productsToShow = this.products;
    this.additionalLoading = false;
    this.allProductsShow = true;
   /* setTimeout(() => {
      this.productService.getAllProducts(9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = [...this.products, ...res];
          this.additionalLoading = false;
        },
        (err) => {
          console.log(err);
          this.additionalLoading = false;
        }
      );
    }, 500);*/
  }
}
