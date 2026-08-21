import {Template,ImageCard} from "../components";

export default function Galeria() {
  return(
    <main>
      <Template>
        <section className="grid grid-cols-4 gap-4  p-4">
          <ImageCard
            imageName='Meu Amigo Totoro'
            imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUyO-_KQ3ySYCabMnqncwfkSJKHn87LLeDj_nDO7nLw&s=10'
            imageSize='15 mb'
            uploadDate='1988-04-16'
          />
          <ImageCard
            imageName='O serviço de entregas da Kiki'
            imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClf8yRtMflMHAipN-7U2tbYjkzUfBFshUHls89Vkoqg&s=10'
            imageSize='15 mb'
            uploadDate='1989-07-29'
          />
          <ImageCard
            imageName='Sussuros do Coração'
            imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWUFx1XL5gIpn-RMTrjHo26hEZG6BUIw_OBSEXM_GBQ&s=10'
            imageSize='15 mb'
            uploadDate='1995-07-15'
          />
          <ImageCard
            imageName='Princesa Mononoke'
            imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZsmwrVamIBUkofySxPNGLXGS6qOE4M1wr75tNXK5PQ&s=10'
            imageSize='15 mb'
            uploadDate='1997-07-12'
          />
          <ImageCard
            imageName='A viagem de Chihiro'
            imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhm4vI2S1dSUh63ERQrgqpcVNSTCG4t-NTd7oLBVNAQ&s=10'
            imageSize='15 mb'
            uploadDate='2001-07-20'
          />
          <ImageCard
            imageName='Castelo Animado'
            imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVRAll3DdFgWGc7kJrI9rjBj74VQb1DNSheEaPu9Ouw&s=10'
            imageSize='15 mb'
            uploadDate='2004-11-20'
          />
          <ImageCard
            imageName='Ponyo'
            imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoLBnTiA45Vv90lxGSvWs7JfZKka2PIjiee4lqJQAbw&s=10'
            imageSize='15 mb'
            uploadDate='2008-07-19'
          />
        </section>
      </Template>
    </main>
  )
}
