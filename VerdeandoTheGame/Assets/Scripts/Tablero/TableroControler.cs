using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class TableroControler : MonoBehaviour
{
    //componentesUI
    public Text dineroDisp;
    public Text ecoPointDisp;

    public Transform panelEventos;
    public List<EventoSO> eventosSO;
    public List<EventoUI> eventosUI;
    public EventoUI eventoPrefab;

    public static TableroControler instance;

    // Start is called before the first frame update
    void Start()
    {

        instance = this;

        for(int i = 0; i < eventosSO.Count; i++)
        {
            EventoUI evento = Instantiate(eventoPrefab, panelEventos);
            evento.id = i;
            eventosUI.Add(evento);
            eventosUI[i].botonEventoDisp.gameObject.GetComponent<UnityEngine.UI.Image>().sprite = eventosSO[i].imagen;
        }
    }

    // Update is called once per frame
    void Update()
    {
        dineroDisp.text = "$" + GameController.Instance.gameSO.dinero.ToString("0");
        ecoPointDisp.text = GameController.Instance.gameSO.ecoPoint.ToString("0") + " EP";
    }

    public void Linker(int id)
    {
        Application.OpenURL(eventosSO[id].Url);
    }

    public void CambiarEscena(int ID)
    {
        SceneManager.LoadScene(ID);
    }
}
