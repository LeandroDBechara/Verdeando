using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class MejoraController : MonoBehaviour
{
    //componentesUI
    public Text dineroDisp;
    public Text ecoPointDisp;
    //otros scripts
    public static MejoraController Instance;

    public MejoraUI mejoraPrefab;
    public Transform panelMejoras;
    //variables internas

    public List<MejoraSO> mejorasSO;
    public List<MejoraUI> mejorasUI;


    // Start is called before the first frame update
    void Start()
    {


        Instance = this;
        for (int i = 0; i < mejorasSO.Count; i++)
        {
            MejoraUI mejora = Instantiate(mejoraPrefab, panelMejoras);
            mejora.id = i;
            mejorasUI.Add(mejora);
            mejorasUI[i].nombreDisp.text = mejorasSO[i].mejoraName;
            mejorasUI[i].costoDisp.text = mejorasSO[i].costocompra.ToString("0");
            mejorasUI[i].imagenDisp.gameObject.GetComponent<UnityEngine.UI.Image>().sprite = mejorasSO[i].mejoraImage;

        }

    }

        // Update is called once per frame
    void Update()
    {
        dineroDisp.text = "$" + GameController.Instance.gameSO.dinero.ToString("0");
        ecoPointDisp.text = GameController.Instance.gameSO.ecoPoint.ToString("0") + " EP";

        for (int i = 0; i < mejorasSO.Count; i++)
        {
            if (mejorasSO[i].costocompra <= GameController.Instance.gameSO.dinero)
            {
                mejorasUI[i].comprarMejora.interactable = true;
            }
            else
            {
                mejorasUI[i].comprarMejora.interactable = false;
            }
        }
    }

    public void ComprarMejora(int id)
    {
        if(GameController.Instance.gameSO.dinero >= mejorasSO[id].costocompra)
        {
            GameController.Instance.gameSO.dinero -= mejorasSO[id].costocompra;
            WorkerController.instance.Mejorar(mejorasSO[id]);
            mejorasUI[id].gameObject.SetActive(false);
        }
    }

    public void CambiarEscena(int ID)
    {
        SceneManager.LoadScene(ID);
    }
}
