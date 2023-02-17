const skills = [
    {id: 125223, skill: 'HTML', acquired: true},
    {id: 127904, skill: 'CSS', acquired: true},
    {id: 149626, skill: 'Javascript', acquired: false},
    {id: 159918, skill: 'Node/Express', acquired: false},
    {id: 169602, skill: 'MongoDB', acquired: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill
  };

  function deleteSkill(id) {
    id = parseInt(id);
    const idx = skills.findIndex(Skill => Skill.id === id);
    skills.splice(idx, 1);
  }

  function create(Skill) {
    Skill.id = Date.now() % 1000000;
    Skill.acquired = false;
    skills.push(Skill);
  }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
 