using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    //controller
    public WorkerController WC;
    public TimeController TimeC;
    public TradeController TradeC;


    //Variables numericas
    public float bananas;
    public float limiteBananas;
    public string leyenda;
    public float bps;
    public float gold;

    //componentesUI
    public Text bananasDisp;
    public Text problemDisp;
    public Text BpsDisp;
    public Text goldDisp;

    // Start is called before the first frame update
    void Start()
    {
        bananas = 0;
        limiteBananas = 20;

    }

    // Update is called once per frame
    void Update()
    {
        bananasDisp.text = leyenda;
        leyenda = "Bananas: " + bananas.ToString("0.0");
        if (bananas < limiteBananas)
        {
            bananasDisp.color = Color.white;
        }
        else
        {
            bananasDisp.color = Color.red;
        }
        BpsDisp.text = bps +"BPS";
        goldDisp.text = "Oro"+ gold.ToString();
    }

    public void GenerarBananas()
    {
        
        if(bananas < limiteBananas) 
        {
            bananas += 1;
        }
        else
        {
            problemDisp.text = "no caben mas bananas";
            StartCoroutine(VanishingProblemText());
        }
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
}
