import { gql, request } from 'graphql-request';
const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

/*Server para fazer a requisição da API*/ 
const GetCategory = async () =>{
    const query = gql`
  query Categories {
    categories(first: 50) {
      id
      name
      slug
      icon {
        url
      }
    }
    }
`;

    const result = await request(MASTER_URL,query);
    return result;
}

const GetBusiness = async (category)=>{
  const query = gql `
    query GetBusiness {
    restaurants(where: {category_some: {slug: "`+category+`"}}) {
      sobreNos
      endereco
      banner {
        url
      }
      category {
        name
      }
      id
      name
      tipo
      slug
      horario
    }
  }
  `
  const result = await request(MASTER_URL,query);
  return result;
}

const GetBusinessDetail = async(BusinessSlug) =>{
  const query = gql `
  query RestaurantDetail {
  restaurant(where: {slug: "`+BusinessSlug+`"}) {
    sobreNos
    endereco
    banner {
      url
    }
    category {
      name
    }
    id
    name
    tipo
    slug
    horario
    menu {
      ... on Menu {
        id
        category
        menuItem {
          ... on MenuItem {
            id
            name
            description
            price
            productImage {
              url
            }
          }
        }
      }
    }
  }
}
`

const result = await request(MASTER_URL,query);
return result;
}



export default{
    GetCategory,
    GetBusiness,
    GetBusinessDetail
} 