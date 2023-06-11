/*
Birimler Sayfası
-Birimler sayfasında kullanıcı json dosyasındaki birimleri listeleyecek.
-Sağ üst köşede mockup'ta görünen olacak.
-Birimler listesinin üzerinde filtreleme alanları olacak.
-İki tür filtreleme olacak. Filtreler combine edilebilecek.

Ages Filtresi:
-Toplam 4 adet çağ var ve bu çağlar sırası ile “Dark”, “Feudal”, “Castle” ve “Imperial”.
-Her birimin minimum gereksinim duyduğu bir çağ var.
-Kullanıcının seçtiği çağ’a göre liste filtrelenecek.
-Kullanıcı isterse “All” opsiyonunu seçip minimum çağ gereksinimini kaldırıp
tüm birimleri listeletebilir.
-Varsayılan olarak “All” opsiyonu seçili gelecek.

Costs Filtresi:

-Birimler minimum ve/veya maksimum costlara göre filtrelenebilecek.
-Cost tipleri: “Food”, “Wood” ve “Gold”
-Kullanıcı isterse cost türlerinin yanındaki checkbox’ları seçerek, 
cost tipine göre filtrelemeyi kullanabilecek.
-Varsayılan olarak tüm tipler unchecked gelecek.
-Kullanıcı bir cost tipini seçtiğinde yanındaki range 
selector aktif edilecek ve kullanıcı bir cost aralığı seçebilecek.
-Seçilen cost aralığına göre birimler filtrelenecek.
-Aynı anda birden fazla cost tipi aktif edilebilir.
-Cost aralığı; minimum 0, maksimum 200 olmalıdır.

Liste:

-Birimler bir tabloda listelenecek.
-Kullanıcının değiştirdiği filtrelere göre liste anlık güncellenecek.
-Kullanıcı listedeki bir birime tıkladığında üzerine tıkladığı birimin 
detay sayfasına yönlendirilecek.
*/

import { Box } from '@mui/material';

import AgeFilter from '../../components/Unit/Filters/AgeFilter';
import CostFilter from '../../components/Unit/Filters/CostFilter';
import Layout from '../layout';

import './index.scss';

function Unit() {
  return (
    <Layout>
      <Box className="unit-container">
        <AgeFilter />
        <CostFilter />
      </Box>
    </Layout>
  );
}

export default Unit;
