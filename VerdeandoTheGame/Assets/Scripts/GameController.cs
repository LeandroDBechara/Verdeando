using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour
{
    //controller
    public WorkerController WC;
    public TimeController TimeC;
    public TradeController TradeC;


    //Variables numericas
    public float dinero;
    public float limiteBananas;
    public string leyenda;
    public float dps;
    public float ecoPoint;

    //componentesUI
    public Text dineroDisp;
    public Text problemDisp;
    public Text dpsDisp;
    public Text ecoPointDisp;

    // Start is called before the first frame update
    void Start()
    {
        dinero = 0;

    }

    // Update is called once per frame
    void Update()
    {
        dineroDisp.text = leyenda;
        leyenda = "$ " + dinero.ToString("0");
        /*if (dinero < limiteBananas)
        {
            dineroDisp.color = Color.white;
        }
        else
        {
            dineroDisp.color = Color.red;
        }*/
        dpsDisp.text = dps +"DPS";
        ecoPointDisp.text = ecoPoint.ToString() + " EP";
    }

    public IEnumerator VanishingProblemText()
    {
        CanvasGroup CG = problemDisp.gameObject.GetComponent<CanvasGroup>();
        CG.alpha = 1;
        yield return new WaitForSeconds(1);
        while (CG.alpha > 0) 
        {
            CG.alpha -= 0.05f;
            yield return new WaitForSeconds(0.1f);
        }
    }

    public void CambiarEscena(int ID)
    {
        SceneManager.LoadScene(ID);
    }
}
