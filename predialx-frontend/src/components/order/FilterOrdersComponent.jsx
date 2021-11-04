/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import { Select, DatePicker, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/pt_BR";
import { listOrder } from "../../hooks/useOrder";
import { listUser } from "../../hooks/useUser";
import { OrderContext } from "../../contexts/OrderContext";
import './FilterOrdersComponent.scss'

export function FilterOrdersComponent() {
  const { RangePicker } = DatePicker;
  const { setOrders } = useContext(OrderContext);
  const [carregando, setCarregando] = useState(false);
  const [selectedDate, setSelectedDate] = useState([]);
  const [creators, setCreators] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [selectedCreatorId, setSelectedCreatorId] = useState(0);
  const [selectedCollaboratorId, setSelectedCollaboratorId] = useState(0);
 


  useEffect(() => {
    const unsubcribe = async () => {
      await loadUsers();
    };

    unsubcribe();

    return () => {
      unsubcribe();
    };
  }, []);
  

  async function loadOrders(formData) {
    setCarregando(true);

    let mounted = true;

    await listOrder(formData).then((response) => {
      if (mounted) {
        setOrders(response.data);
      }
    });

    setCarregando(false);

    return function cleanup() {
      mounted = false;
    };
  }

  async function loadUsers(){
    setCarregando(true);

    let mounted = true;

    await listUser({}).then((response) => {
      if (mounted) {
        const users = response.data;

        const creatorsList = users.filter((value) => {
          return value.access_level === 'cliente';          
        })

        const creatorsOption = creatorsList.map((value) => { return {label: value.name, value: value.id }})

        const collaboratorsList = users.filter((value) => {
          return value.access_level === 'colaborador';          
        })

        const collaboratorsOption = collaboratorsList.map((value) => { return {label: value.name, value: value.id }})
        
        setCreators(creatorsOption);
        
        setCollaborators(collaboratorsOption);
      }
    });

    setCarregando(false);

    return function cleanup() {
      mounted = false;
    };
  }

  function handleFilter() {
    loadOrders({
      startDate: selectedDate[0] || null,
      endDate: selectedDate[1] || null,
      creatorId: selectedCreatorId,
      collaboratorId: selectedCollaboratorId
    })
  }

  function handleSelectCreator(value) {
    setSelectedCreatorId(value)
  }

  function handleSelectCollaborator(value) {
    setSelectedCollaboratorId(value)
  }

  return (
    <div id="filter-order">
      <RangePicker  locale={locale} onChange={(date, dateString) => setSelectedDate(dateString)} />
      <Select
        showSearch
        style={{ width: 200 }}
        onChange={handleSelectCreator}
        placeholder="Selecione um cliente"
        options={creators}
      >
      </Select>

      <Select
        showSearch
        style={{ width: 200 }}
        onChange={handleSelectCollaborator}
        placeholder="Selecione um colaborador"
        options={collaborators}
      >
      </Select>

      <Button
        type="primary"
        icon={<SearchOutlined />}
        loading={carregando}
        onClick={() => handleFilter()}
      >Filtrar</Button>
    </div>
  );
}
