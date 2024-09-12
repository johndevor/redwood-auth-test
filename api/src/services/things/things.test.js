import { things, thing, createThing, updateThing, deleteThing } from './things'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('things', () => {
  scenario('returns all things', async (scenario) => {
    const result = await things()

    expect(result.length).toEqual(Object.keys(scenario.thing).length)
  })

  scenario('returns a single thing', async (scenario) => {
    const result = await thing({ id: scenario.thing.one.id })

    expect(result).toEqual(scenario.thing.one)
  })

  scenario('creates a thing', async () => {
    const result = await createThing({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a thing', async (scenario) => {
    const original = await thing({ id: scenario.thing.one.id })
    const result = await updateThing({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a thing', async (scenario) => {
    const original = await deleteThing({ id: scenario.thing.one.id })
    const result = await thing({ id: original.id })

    expect(result).toEqual(null)
  })
})
