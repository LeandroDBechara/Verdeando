using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class MisionController : MonoBehaviour
{
    //componentesUI
    public Text dineroDisp;
    public Text ecoPointDisp;

    public Transform panelMisiones;
    public Transform panelDescripcion;
    public List<MisionSO> misionesSO;
    public List<MisionUI> misionesUI;
    public MisionUI misionPrefab;

    public static MisionController Instance;

    public Button flechaVolver;
    public Text descripcionDisp;

    // Start is called before the first frame update
    void Start()
    {


        Instance = this;

        panelDescripcion.gameObject.SetActive(false);
        for (int i = 0; i < misionesSO.Count; i++)
        {
            MisionUI mision = Instantiate(misionPrefab, panelMisiones);
            mision.id = i;
            misionesUI.Add(mision);
            misionesUI[i].imagenDisp.gameObject.GetComponent<UnityEngine.UI.Image>().sprite = misionesSO[i].sprite;
        }
    }

    // Update is called once per frame
    void Update()
    {
        dineroDisp.text = "$" + GameController.Instance.gameSO.dinero.ToString("0");
        ecoPointDisp.text = GameController.Instance.gameSO.ecoPoint.ToString("0") + " EP";

        if(GameController.Instance.gameSO.dinero >= 100)
        {
            misionesSO[0].echo = true;
        }

        for (int i = 0; i < misionesSO.Count; i++)
        {
            if(misionesSO[i].echo == true)
            {
                misionesUI[i].botonDisp.gameObject.GetComponent<Image>().color = Color.green;
            }
        }
    }

    public void MostrarDescipcion(int id)
    {
        panelDescripcion.gameObject.SetActive(true);
        descripcionDisp.text = misionesSO[id].descripcion;
    }

    public void Volver()
    {
        panelDescripcion.gameObject.SetActive(false);
    }

    public void CambiarColor(int id)
    {
        misionesSO[id].echo = true;
    }

    public void CambiarEscena(int ID)
    {
        SceneManager.LoadScene(ID);
    }
}
