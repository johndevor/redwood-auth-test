import { db } from 'src/lib/db'

export const things = () => {
  return db.thing.findMany()
}

export const thing = ({ id }) => {
  return db.thing.findUnique({
    where: { id },
  })
}

export const createThing = ({ input }) => {
  return db.thing.create({
    data: input,
  })
}

export const updateThing = ({ id, input }) => {
  return db.thing.update({
    data: input,
    where: { id },
  })
}

export const deleteThing = ({ id }) => {
  return db.thing.delete({
    where: { id },
  })
}
