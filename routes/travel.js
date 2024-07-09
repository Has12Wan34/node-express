const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET all travels
router.get('/travels', async (req, res) => {
  try {
    const travels = await prisma.travel.findMany();
    res.json(travels);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving travels' });
  }
});

// GET travel by id
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const travel = await prisma.travel.findUnique({
      where: { id },
    });
    if (!travel) {
      return res.status(404).json({ message: 'Travel not found' });
    }
    res.json(travel);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving travel' });
  }
});

// POST create new travel
router.post('/travel', async (req, res) => {
  const { destination, description } = req.body;
  try {
    const newTravel = await prisma.travel.create({
      data: {
        destination,
        description,
      },
    });
    res.status(201).json(newTravel);
  } catch (error) {
    res.status(500).json({ error: 'Error creating travel' });
  }
});

// PUT update travel by id
router.put('/travel/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { destination, description } = req.body;
  try {
    const updatedTravel = await prisma.travel.update({
      where: {
        id,
      },
      data: {
        destination,
        description,
      },
    });
    res.json(updatedTravel);
  } catch (error) {
    res.status(500).json({ error: 'Error updating travel' });
  }
});

// DELETE travel by id
router.delete('/travel/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.travel.delete({
      where: {
        id,
      },
    });
    res.json({ message: `Travel with ID ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting travel' });
  }
});

module.exports = router;
