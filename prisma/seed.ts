import { PrismaClient } from "@prisma/client";
import { companies, companyProducts, category, featured } from "./seeds";

const prisma = new PrismaClient();

const seedCreate = (obj, model)=> {
    return new Promise(async res=> {
        for (let data of obj) await prisma[model].create({ data }).catch(err=> console.log('Err >>>> ', err))
        res(true)
    })
}

const seed = ()=> {
    seedCreate(category, 'category')
    seedCreate(featured, 'featured')
    seedCreate(companies, 'company').then(()=> seedCreate(companyProducts, 'company_Product'))
}

(async ()=> seed())().catch(err=> {
    console.log(err)
    process.exit(1)
}).finally(()=> prisma.$disconnect())